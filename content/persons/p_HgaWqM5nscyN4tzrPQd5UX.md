---
schema: wang-person/v1
id: p_HgaWqM5nscyN4tzrPQd5UX
status: active
merged_into: null
display_name: 王重賢
cbdb_id: 202269
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JubV4xkzxRWN1Fv7KxxzAY
        subject_person_id: p_HgaWqM5nscyN4tzrPQd5UX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重賢（生于1493年），史料所见人物。本项目依据《中国历代人物传记资料库：王重賢（CBDB 202269）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_wLImzsXOve9NKdALlpATZM
          claim_id: c_JubV4xkzxRWN1Fv7KxxzAY
          source_id: s_jHdnTBZPdDGvCr6ASha9LR
          stance: supports
          locator: CBDB:202269
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_jHdnTBZPdDGvCr6ASha9LR
            source_type: api_record
            title: 中国历代人物传记资料库：王重賢（CBDB 202269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202269&o=json
            external_identifier: CBDB:202269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_EmiPehMtHwtcpi54E3ruPZ
        subject_person_id: p_HgaWqM5nscyN4tzrPQd5UX
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1493年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1493-01-01
            latest: 1493-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DoEQrJWawY2wBDZHUL29Ba
          claim_id: c_EmiPehMtHwtcpi54E3ruPZ
          source_id: s_jHdnTBZPdDGvCr6ASha9LR
          stance: supports
          locator: CBDB:202269
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1493
          source:
            id: s_jHdnTBZPdDGvCr6ASha9LR
            source_type: api_record
            title: 中国历代人物传记资料库：王重賢（CBDB 202269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202269&o=json
            external_identifier: CBDB:202269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ap9Gp2Aa8xnbNDD3LqP6Pf
        subject_person_id: p_HgaWqM5nscyN4tzrPQd5UX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fgxnzEAj6EQ9XtKaY1Qj73
          claim_id: c_Ap9Gp2Aa8xnbNDD3LqP6Pf
          source_id: s_jHdnTBZPdDGvCr6ASha9LR
          stance: supports
          locator: CBDB:202269
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1493
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2iQ3b3s1ay1zNvclxECBif
        subject_person_id: p_yeJtEcC7cBaU9sVyVGy7xj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HgaWqM5nscyN4tzrPQd5UX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zKXwMlGUHr0LkSWhFomm6v
          claim_id: c_2iQ3b3s1ay1zNvclxECBif
          source_id: s_Qd3RrwisKBNCET2WYrdjmq
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百六十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Qd3RrwisKBNCET2WYrdjmq
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 285846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285846&o=json
            external_identifier: CBDB:285846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.221Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_yeJtEcC7cBaU9sVyVGy7xj
        status: active
        display_name: 王鉞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_GxH0m9Irak9CeEPnzHWY2N
        subject_person_id: p_1gaZDQ7d8kFL8eFuBSCEFG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HgaWqM5nscyN4tzrPQd5UX
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k1YGCvyPK6iXteUY9fG5MR
          claim_id: c_GxH0m9Irak9CeEPnzHWY2N
          source_id: s_pdvS2r39n4pGjuVoxG3ciA
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百六十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pdvS2r39n4pGjuVoxG3ciA
            source_type: api_record
            title: 中国历代人物传记资料库：王友信（CBDB 285844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285844&o=json
            external_identifier: CBDB:285844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.220Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1gaZDQ7d8kFL8eFuBSCEFG
        status: active
        display_name: 王友信
        merged_into_person_id: null
    - claim:
        id: c_ON0cNXjPcpyAi_78FN1Nnf
        subject_person_id: p_V1Lxrxvhjt1V6KGoR8pwse
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HgaWqM5nscyN4tzrPQd5UX
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sah6VPDFd2T0n6YgSnUecY
          claim_id: c_ON0cNXjPcpyAi_78FN1Nnf
          source_id: s_92DA7Crq517en2QZHHLaie
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百六十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_92DA7Crq517en2QZHHLaie
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 285845）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285845&o=json
            external_identifier: CBDB:285845
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.220Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_V1Lxrxvhjt1V6KGoR8pwse
        status: active
        display_name: 王安
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王重賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王重賢（生于1493年），史料所见人物。本项目依据《中国历代人物传记资料库：王重賢（CBDB 202269）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1493年 | accepted |
| name.primary | 王重賢 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yeJtEcC7cBaU9sVyVGy7xj | 王鉞 | accepted |
| ancestors | p_1gaZDQ7d8kFL8eFuBSCEFG | 王友信 | accepted |
| ancestors | p_V1Lxrxvhjt1V6KGoR8pwse | 王安 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安（CBDB 285845）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285845&o=json)
- [中国历代人物传记资料库：王友信（CBDB 285844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285844&o=json)
- [中国历代人物传记资料库：王鉞（CBDB 285846）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285846&o=json)
- [中国历代人物传记资料库：王重賢（CBDB 202269）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202269&o=json)
