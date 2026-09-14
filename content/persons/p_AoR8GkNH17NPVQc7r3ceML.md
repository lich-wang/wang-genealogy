---
schema: wang-person/v1
id: p_AoR8GkNH17NPVQc7r3ceML
status: active
merged_into: null
display_name: 王紀
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_knjJxuT8dLKHtEA4Z17LM1
        subject_person_id: p_AoR8GkNH17NPVQc7r3ceML
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9AYwrBqisVNMkp2kmC6JKV
          claim_id: c_knjJxuT8dLKHtEA4Z17LM1
          source_id: s_1R2BgWRxywAEFj1SAn7jL5
          stance: supports
          locator: CBDB:202256
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202256）
          source: &a1
            id: s_1R2BgWRxywAEFj1SAn7jL5
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 202256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202256&o=json
            external_identifier: CBDB:202256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.731Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_j8ZbaDWz3Ft97X4WExG3v4
        subject_person_id: p_AoR8GkNH17NPVQc7r3ceML
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1481年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_45GBAzsWfTw3xZbG5xkaeP
          claim_id: c_j8ZbaDWz3Ft97X4WExG3v4
          source_id: s_1R2BgWRxywAEFj1SAn7jL5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x8sGbktoKBruXEZeBVcnLz
        subject_person_id: p_AoR8GkNH17NPVQc7r3ceML
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紀（生于1481年），明人物。明清進士進士，籍贯開州，入仕進士。（中国历代人物传记资料库 CBDB 202256）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dB9K2tgiqdWxp2AzouJ6Qf
          claim_id: c_x8sGbktoKBruXEZeBVcnLz
          source_id: s_1R2BgWRxywAEFj1SAn7jL5
          stance: supports
          locator: CBDB:202256
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vBhMhdTDiW1Q-4XDAkxDTw
        subject_person_id: p_ETf8kmCosGHgchW9GUTGiB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AoR8GkNH17NPVQc7r3ceML
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yo3ha0PfpgGhc6UvYuPKGs
          claim_id: c_vBhMhdTDiW1Q-4XDAkxDTw
          source_id: s_zjKNo48iNJhzY3juEcyiQD
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百四十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zjKNo48iNJhzY3juEcyiQD
            source_type: api_record
            title: 中国历代人物传记资料库：王絕（CBDB 285657）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285657&o=json
            external_identifier: CBDB:285657
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_ETf8kmCosGHgchW9GUTGiB
        status: active
        display_name: 王絕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_RvMYs6C8vKJbEIHH8QsWf5
        subject_person_id: p_4VxcNhhw8r2s8xsCar24Jb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AoR8GkNH17NPVQc7r3ceML
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LZzyIPnWs6ArXOlKNUa5JT
          claim_id: c_RvMYs6C8vKJbEIHH8QsWf5
          source_id: s_PFBHL68FfXuRsKKjs9KbEu
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百四十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PFBHL68FfXuRsKKjs9KbEu
            source_type: api_record
            title: 中国历代人物传记资料库：王福榮（CBDB 285655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285655&o=json
            external_identifier: CBDB:285655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.215Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4VxcNhhw8r2s8xsCar24Jb
        status: active
        display_name: 王福榮
        merged_into_person_id: null
    - claim:
        id: c_gIok7Jk98wYSgJhLaPfrYu
        subject_person_id: p_BCTpCCeTsL2MyDhgFLN2VE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AoR8GkNH17NPVQc7r3ceML
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bm4qoO-WJPLDW51C0pmV74
          claim_id: c_gIok7Jk98wYSgJhLaPfrYu
          source_id: s_rvHGcpMGMPPmLWUPrE48Nv
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百四十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rvHGcpMGMPPmLWUPrE48Nv
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 285656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285656&o=json
            external_identifier: CBDB:285656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.216Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BCTpCCeTsL2MyDhgFLN2VE
        status: active
        display_name: 王信
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_Zjj8iR5tQYt9t2RT7xJ6uG
        subject_person_id: p_7L6vTEhn2FkQkWTc6fQMiM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_AoR8GkNH17NPVQc7r3ceML
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IFatkkCaEfelmGPqgwUZfU
          claim_id: c_Zjj8iR5tQYt9t2RT7xJ6uG
          source_id: s_g-xHIqhkj5zGUt_fu2_EFW
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202256 王紀）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_g-xHIqhkj5zGUt_fu2_EFW
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 285664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285664&o=json
            external_identifier: CBDB:285664
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7L6vTEhn2FkQkWTc6fQMiM
        status: active
        display_name: 王紳
        merged_into_person_id: null
    - claim:
        id: c_xVEOqB9fQswp9r0_nKXV2m
        subject_person_id: p_8kQgVN3FjWf6BR7HACAhWz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_AoR8GkNH17NPVQc7r3ceML
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lRqjxAQTO3IUG8q6GKfW8T
          claim_id: c_xVEOqB9fQswp9r0_nKXV2m
          source_id: s_x8epU5eB4Vrd3s5Sw78bsf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202256 王紀）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_x8epU5eB4Vrd3s5Sw78bsf
            source_type: api_record
            title: 中国历代人物传记资料库：王綬（CBDB 285667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285667&o=json
            external_identifier: CBDB:285667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8kQgVN3FjWf6BR7HACAhWz
        status: active
        display_name: 王綬
        merged_into_person_id: null
    - claim:
        id: c_ObwiZ6W-9pDOlok4r4ICVU
        subject_person_id: p_AoR8GkNH17NPVQc7r3ceML
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DPFCgxr4LairETxw54Hxu7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9zV1NgVFdwdeB5VU3uc8ge
          claim_id: c_ObwiZ6W-9pDOlok4r4ICVU
          source_id: s_4Q9fe69WTT-3AzW9CidemO
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202256 王紀）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4Q9fe69WTT-3AzW9CidemO
            source_type: api_record
            title: 中国历代人物传记资料库：王組（CBDB 285666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285666&o=json
            external_identifier: CBDB:285666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DPFCgxr4LairETxw54Hxu7
        status: active
        display_name: 王組
        merged_into_person_id: null
    - claim:
        id: c_Ns0EFtAXgwj7MSrvoMbYF1
        subject_person_id: p_AoR8GkNH17NPVQc7r3ceML
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_P6LNk8B5uiXAQwdqQEiL1Y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YMOTXQUb9TTRY3xLUAhpn2
          claim_id: c_Ns0EFtAXgwj7MSrvoMbYF1
          source_id: s_I3G1U62OJrjkWAFE-EF2FF
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202256 王紀）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_I3G1U62OJrjkWAFE-EF2FF
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 285663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285663&o=json
            external_identifier: CBDB:285663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_P6LNk8B5uiXAQwdqQEiL1Y
        status: active
        display_name: 王縉
        merged_into_person_id: null
    - claim:
        id: c_rdrkVaNP9MvzDd49i4ugHX
        subject_person_id: p_AoR8GkNH17NPVQc7r3ceML
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XSYooHTQmpa4a4YSkV3US8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zHw9OSVi28ibDrTOjfF4ae
          claim_id: c_rdrkVaNP9MvzDd49i4ugHX
          source_id: s_ZFJT6X1Ug1wuglxMM3UUqr
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202256 王紀）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZFJT6X1Ug1wuglxMM3UUqr
            source_type: api_record
            title: 中国历代人物传记资料库：王紋（CBDB 285665）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285665&o=json
            external_identifier: CBDB:285665
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XSYooHTQmpa4a4YSkV3US8
        status: active
        display_name: 王紋
        merged_into_person_id: null
---

# 王紀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紀 | accepted |
| birth.date | 1481年 | accepted |
| bio.summary | 王紀（生于1481年），明人物。明清進士進士，籍贯開州，入仕進士。（中国历代人物传记资料库 CBDB 202256） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ETf8kmCosGHgchW9GUTGiB | 王絕 | accepted |
| ancestors | p_4VxcNhhw8r2s8xsCar24Jb | 王福榮 | accepted |
| ancestors | p_BCTpCCeTsL2MyDhgFLN2VE | 王信 | accepted |
| other | p_7L6vTEhn2FkQkWTc6fQMiM | 王紳 | accepted |
| other | p_8kQgVN3FjWf6BR7HACAhWz | 王綬 | accepted |
| other | p_DPFCgxr4LairETxw54Hxu7 | 王組 | accepted |
| other | p_P6LNk8B5uiXAQwdqQEiL1Y | 王縉 | accepted |
| other | p_XSYooHTQmpa4a4YSkV3US8 | 王紋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福榮（CBDB 285655）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285655&o=json)
- [中国历代人物传记资料库：王紀（CBDB 202256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202256&o=json)
- [中国历代人物传记资料库：王縉（CBDB 285663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285663&o=json)
- [中国历代人物传记资料库：王絕（CBDB 285657）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285657&o=json)
- [中国历代人物传记资料库：王紳（CBDB 285664）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285664&o=json)
- [中国历代人物传记资料库：王綬（CBDB 285667）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285667&o=json)
- [中国历代人物传记资料库：王紋（CBDB 285665）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285665&o=json)
- [中国历代人物传记资料库：王信（CBDB 285656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285656&o=json)
- [中国历代人物传记资料库：王組（CBDB 285666）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285666&o=json)
