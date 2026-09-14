---
schema: wang-person/v1
id: p_xAnhmoVcnedrkYag8SmuS8
status: active
merged_into: null
display_name: 王士瑤
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qGnJd7rXGAiY8vDpkC8CbR
        subject_person_id: p_xAnhmoVcnedrkYag8SmuS8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士瑤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hNrPcYC3BdEinWG72fNetF
          claim_id: c_qGnJd7rXGAiY8vDpkC8CbR
          source_id: s_RMrektBF5JTDkVK2V5Kp3S
          stance: supports
          locator: CBDB:228573
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（228573）
          source: &a1
            id: s_RMrektBF5JTDkVK2V5Kp3S
            source_type: api_record
            title: 中国历代人物传记资料库：王士瑤（CBDB 228573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228573&o=json
            external_identifier: CBDB:228573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.562Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sMhHtbCX5iRwdukffbvDCP
        subject_person_id: p_xAnhmoVcnedrkYag8SmuS8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士瑤，明人物。萬曆丙戌科進士進士，籍贯安邱，曾任知縣。（中国历代人物传记资料库 CBDB 228573）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dUvj9MkMGWi1NemOMO8hY2
          claim_id: c_sMhHtbCX5iRwdukffbvDCP
          source_id: s_RMrektBF5JTDkVK2V5Kp3S
          stance: supports
          locator: CBDB:228573
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_72umLHUu8i-h5tO77GxAle
        subject_person_id: p_xAnhmoVcnedrkYag8SmuS8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z1sXa1thNM94WHiooGYHug
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hZbqY-jgJFR8d6EuYjpzix
          claim_id: c_72umLHUu8i-h5tO77GxAle
          source_id: s_RMrektBF5JTDkVK2V5Kp3S
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百六十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Z1sXa1thNM94WHiooGYHug
        status: active
        display_name: 王孟煦
        merged_into_person_id: null
    - claim:
        id: c_dZnr02FqDx1ZPPXcoYnxeB
        subject_person_id: p_xAnhmoVcnedrkYag8SmuS8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EZsLDSCWA11NgsvJ76UqAt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8TPgJKFBc56hHcJKIpUZ-z
          claim_id: c_dZnr02FqDx1ZPPXcoYnxeB
          source_id: s_p17hvwPeG4aO5q6Ghmz13d
          stance: supports
          locator: CBDB：兄弟 王孟煦（207153）之父／母 王士瑤
          quotation: null
          interpretation_note: 由兄弟关系推断：王孟晚 与 王孟煦 为同胞（CBDB 记「兄」），王孟煦 之父／母即 王孟晚 之父／母。
          source:
            id: s_p17hvwPeG4aO5q6Ghmz13d
            source_type: api_record
            title: 中国历代人物传记资料库：王孟晚（CBDB 228580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228580&o=json
            external_identifier: CBDB:228580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EZsLDSCWA11NgsvJ76UqAt
        status: active
        display_name: 王孟晚
        merged_into_person_id: null
    - claim:
        id: c_Yin55L-_VvhDAiL7EQmKRy
        subject_person_id: p_xAnhmoVcnedrkYag8SmuS8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XxKMPHvrG9fAzhpVu7454q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YH7R07RcfOFYevN5whOAmN
          claim_id: c_Yin55L-_VvhDAiL7EQmKRy
          source_id: s_Sum7kVHpVMXR7X64h-YdXb
          stance: supports
          locator: CBDB：兄弟 王孟煦（207153）之父／母 王士瑤
          quotation: null
          interpretation_note: 由兄弟关系推断：王孟曙 与 王孟煦 为同胞（CBDB 记「弟」），王孟煦 之父／母即 王孟曙 之父／母。
          source:
            id: s_Sum7kVHpVMXR7X64h-YdXb
            source_type: api_record
            title: 中国历代人物传记资料库：王孟曙（CBDB 228579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228579&o=json
            external_identifier: CBDB:228579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XxKMPHvrG9fAzhpVu7454q
        status: active
        display_name: 王孟曙
        merged_into_person_id: null
    - claim:
        id: c_XLkCukw6gjoHlNTKD3cvtM
        subject_person_id: p_xAnhmoVcnedrkYag8SmuS8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mQw5PtK1fE7Cx7FiMRYTSJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mupf0_Qml7l4gv-g79n7sl
          claim_id: c_XLkCukw6gjoHlNTKD3cvtM
          source_id: s_CFzTIJvLtlw9C4kbInPE8U
          stance: supports
          locator: CBDB：兄弟 王孟煦（207153）之父／母 王士瑤
          quotation: null
          interpretation_note: 由兄弟关系推断：王孟時 与 王孟煦 为同胞（CBDB 记「兄」），王孟煦 之父／母即 王孟時 之父／母。
          source:
            id: s_CFzTIJvLtlw9C4kbInPE8U
            source_type: api_record
            title: 中国历代人物传记资料库：王孟時（CBDB 228581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228581&o=json
            external_identifier: CBDB:228581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mQw5PtK1fE7Cx7FiMRYTSJ
        status: active
        display_name: 王孟時
        merged_into_person_id: null
    - claim:
        id: c_uRowp0nWgy1Su5fQBuD2xz
        subject_person_id: p_xAnhmoVcnedrkYag8SmuS8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tYAcPPwhC976nvyiHwA6Nw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__QxApGHtltUOUOXqP8OVny
          claim_id: c_uRowp0nWgy1Su5fQBuD2xz
          source_id: s_iFsv8Tpt3dYsYjRRy6MfEL
          stance: supports
          locator: CBDB：兄弟 王孟煦（207153）之父／母 王士瑤
          quotation: null
          interpretation_note: 由兄弟关系推断：王孟暉 与 王孟煦 为同胞（CBDB 记「弟」），王孟煦 之父／母即 王孟暉 之父／母。
          source:
            id: s_iFsv8Tpt3dYsYjRRy6MfEL
            source_type: api_record
            title: 中国历代人物传记资料库：王孟暉（CBDB 228578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228578&o=json
            external_identifier: CBDB:228578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tYAcPPwhC976nvyiHwA6Nw
        status: active
        display_name: 王孟暉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王士瑤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士瑤 | accepted |
| bio.summary | 王士瑤，明人物。萬曆丙戌科進士進士，籍贯安邱，曾任知縣。（中国历代人物传记资料库 CBDB 228573） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Z1sXa1thNM94WHiooGYHug | 王孟煦 | accepted |
| children | p_EZsLDSCWA11NgsvJ76UqAt | 王孟晚 | accepted |
| children | p_XxKMPHvrG9fAzhpVu7454q | 王孟曙 | accepted |
| children | p_mQw5PtK1fE7Cx7FiMRYTSJ | 王孟時 | accepted |
| children | p_tYAcPPwhC976nvyiHwA6Nw | 王孟暉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孟暉（CBDB 228578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228578&o=json)
- [中国历代人物传记资料库：王孟時（CBDB 228581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228581&o=json)
- [中国历代人物传记资料库：王孟曙（CBDB 228579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228579&o=json)
- [中国历代人物传记资料库：王孟晚（CBDB 228580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228580&o=json)
- [中国历代人物传记资料库：王士瑤（CBDB 228573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228573&o=json)
