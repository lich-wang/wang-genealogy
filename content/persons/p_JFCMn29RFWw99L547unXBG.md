---
schema: wang-person/v1
id: p_JFCMn29RFWw99L547unXBG
status: active
merged_into: null
display_name: 王養浩
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xgBaLJ56BjH5mz8HU6FQBR
        subject_person_id: p_JFCMn29RFWw99L547unXBG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王養浩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DBy8ZEjgriSncXqZJWbsKi
          claim_id: c_xgBaLJ56BjH5mz8HU6FQBR
          source_id: s_VEQu8DNf1mjbhX7V8M8uW9
          stance: supports
          locator: CBDB:203320
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203320）
          source: &a1
            id: s_VEQu8DNf1mjbhX7V8M8uW9
            source_type: api_record
            title: 中国历代人物传记资料库：王養浩（CBDB 203320）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203320&o=json
            external_identifier: CBDB:203320
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.781Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wNcFQFpPwhHqzoPj7QWq18
        subject_person_id: p_JFCMn29RFWw99L547unXBG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1506年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pcmD3h6M9HU4pDC6bELRsg
          claim_id: c_wNcFQFpPwhHqzoPj7QWq18
          source_id: s_VEQu8DNf1mjbhX7V8M8uW9
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
        id: c_6FGPMavrbDLD4HPbHjY73N
        subject_person_id: p_JFCMn29RFWw99L547unXBG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王養浩（生于1506年），明人物。明清進士進士，籍贯南充，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 203320）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CwdIpPjvNjbSAzQ_IdxK0G
          claim_id: c_6FGPMavrbDLD4HPbHjY73N
          source_id: s_VEQu8DNf1mjbhX7V8M8uW9
          stance: supports
          locator: CBDB:203320
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Z6iDnmlJ-1Wc7qyqGln0AU
        subject_person_id: p_L25AA1dbPLFD1pLw6NiMqz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JFCMn29RFWw99L547unXBG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WX8OvyeWBvT3riYNhuoXtl
          claim_id: c_Z6iDnmlJ-1Wc7qyqGln0AU
          source_id: s_i1uZY6NhK22gAokU3QjXqb
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_i1uZY6NhK22gAokU3QjXqb
            source_type: api_record
            title: 中国历代人物传记资料库：王璠（CBDB 287959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287959&o=json
            external_identifier: CBDB:287959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.278Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_L25AA1dbPLFD1pLw6NiMqz
        status: active
        display_name: 王璠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_IXct2LnYhuwXAyvXG7OgIk
        subject_person_id: p_8gmNnD67pPk4Jcgg1oaCvd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JFCMn29RFWw99L547unXBG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k9COvrgPKT4MzLW-cPrvwg
          claim_id: c_IXct2LnYhuwXAyvXG7OgIk
          source_id: s_ruU7HRY239s3HmDCn8SH4K
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ruU7HRY239s3HmDCn8SH4K
            source_type: api_record
            title: 中国历代人物传记资料库：王邑（CBDB 287958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287958&o=json
            external_identifier: CBDB:287958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.277Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8gmNnD67pPk4Jcgg1oaCvd
        status: active
        display_name: 王邑
        merged_into_person_id: null
    - claim:
        id: c_wbWzIxFQqdOXtXcR4T_jG3
        subject_person_id: p_hEFhwUEzH2dB433RHJ2LCZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JFCMn29RFWw99L547unXBG
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ByC_iLAtRZ7583-7m-6OMX
          claim_id: c_wbWzIxFQqdOXtXcR4T_jG3
          source_id: s_JTisP1mQ81sz17so9U7PCf
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JTisP1mQ81sz17so9U7PCf
            source_type: api_record
            title: 中国历代人物传记资料库：王進（CBDB 287957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287957&o=json
            external_identifier: CBDB:287957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.276Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hEFhwUEzH2dB433RHJ2LCZ
        status: active
        display_name: 王進
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_afHLFcRLkBst7cZ_m8zKt1
        subject_person_id: p_Ac1QB97Qd839svGrqdwqxL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JFCMn29RFWw99L547unXBG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KkkSZeOmBO3oVI183cHhMe
          claim_id: c_afHLFcRLkBst7cZ_m8zKt1
          source_id: s_K3PRUZZBghSk0MEwfQE-LB
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203320 王養浩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_K3PRUZZBghSk0MEwfQE-LB
            source_type: api_record
            title: 中国历代人物传记资料库：王養濂（CBDB 303033）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303033&o=json
            external_identifier: CBDB:303033
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ac1QB97Qd839svGrqdwqxL
        status: active
        display_name: 王養濂
        merged_into_person_id: null
    - claim:
        id: c_IeJeAfhKmpbP7RUC8ETsUL
        subject_person_id: p_Fj2FWE18U3HUHwm4FacqQR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JFCMn29RFWw99L547unXBG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V5cIVqUsXTBhFoYbHwcH2F
          claim_id: c_IeJeAfhKmpbP7RUC8ETsUL
          source_id: s_RU2dRo9SUK4OIkrKaFJWfX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203320 王養浩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RU2dRo9SUK4OIkrKaFJWfX
            source_type: api_record
            title: 中国历代人物传记资料库：王養素（CBDB 287965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287965&o=json
            external_identifier: CBDB:287965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Fj2FWE18U3HUHwm4FacqQR
        status: active
        display_name: 王養素
        merged_into_person_id: null
    - claim:
        id: c_X_zyYhqopwEQksQjS4T7Uq
        subject_person_id: p_JFCMn29RFWw99L547unXBG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_u458xMHFN5Z27VY2fzxC4e
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Nn_00qDcKZnalG2eCST8Rg
          claim_id: c_X_zyYhqopwEQksQjS4T7Uq
          source_id: s_VfHDru5s9GGnrB_-KF0RkC
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203320 王養浩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VfHDru5s9GGnrB_-KF0RkC
            source_type: api_record
            title: 中国历代人物传记资料库：王養賢（CBDB 287963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287963&o=json
            external_identifier: CBDB:287963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_u458xMHFN5Z27VY2fzxC4e
        status: active
        display_name: 王養賢
        merged_into_person_id: null
---

# 王養浩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王養浩 | accepted |
| birth.date | 1506年 | accepted |
| bio.summary | 王養浩（生于1506年），明人物。明清進士進士，籍贯南充，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 203320） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_L25AA1dbPLFD1pLw6NiMqz | 王璠 | accepted |
| ancestors | p_8gmNnD67pPk4Jcgg1oaCvd | 王邑 | accepted |
| ancestors | p_hEFhwUEzH2dB433RHJ2LCZ | 王進 | accepted |
| other | p_Ac1QB97Qd839svGrqdwqxL | 王養濂 | accepted |
| other | p_Fj2FWE18U3HUHwm4FacqQR | 王養素 | accepted |
| other | p_u458xMHFN5Z27VY2fzxC4e | 王養賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璠（CBDB 287959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287959&o=json)
- [中国历代人物传记资料库：王進（CBDB 287957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287957&o=json)
- [中国历代人物传记资料库：王養浩（CBDB 203320）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203320&o=json)
- [中国历代人物传记资料库：王養濂（CBDB 303033）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303033&o=json)
- [中国历代人物传记资料库：王養素（CBDB 287965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287965&o=json)
- [中国历代人物传记资料库：王養賢（CBDB 287963）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287963&o=json)
- [中国历代人物传记资料库：王邑（CBDB 287958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287958&o=json)
