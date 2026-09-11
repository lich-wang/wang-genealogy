---
schema: wang-person/v1
id: p_wEqsogkdLBrdte1KEpUFVQ
status: active
merged_into: null
display_name: 王祐
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ax7jvNbFCKWtnbaabqCEp7
        subject_person_id: p_wEqsogkdLBrdte1KEpUFVQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hMrPA4b6Loew5rQzmF7CgP
          claim_id: c_Ax7jvNbFCKWtnbaabqCEp7
          source_id: s_JXSJ4Jyd8P9KGd3kiUnAzw
          stance: supports
          locator: CBDB:38358
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38358）
          source: &a1
            id: s_JXSJ4Jyd8P9KGd3kiUnAzw
            source_type: api_record
            title: 中国历代人物传记资料库：王祐（CBDB 38358）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38358&o=json
            external_identifier: CBDB:38358
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.439Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S7Vjccx5NV6s2tPEZYH4G3
        subject_person_id: p_wEqsogkdLBrdte1KEpUFVQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VbvqsGHNAbUtT2KzGULUPH
          claim_id: c_S7Vjccx5NV6s2tPEZYH4G3
          source_id: s_JXSJ4Jyd8P9KGd3kiUnAzw
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Bgpm8J0EZ9nqN9f8MRLPRC
        subject_person_id: p_aeQuz9T27oQ8FHTk36tCX7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wEqsogkdLBrdte1KEpUFVQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pH_-4jfRPT5Z7RQHfnd11g
          claim_id: c_Bgpm8J0EZ9nqN9f8MRLPRC
          source_id: s_3bzL7xxo5wfo9JJxb3hVnV
          stance: supports
          locator: 宋史：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3bzL7xxo5wfo9JJxb3hVnV
            source_type: api_record
            title: 中国历代人物传记资料库：王徹（CBDB 37837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37837&o=json
            external_identifier: CBDB:37837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.268Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aeQuz9T27oQ8FHTk36tCX7
        status: active
        display_name: 王徹
        merged_into_person_id: null
  children:
    - claim:
        id: c_mbMxPM1m8OCtwe_rkuuvhe
        subject_person_id: p_wEqsogkdLBrdte1KEpUFVQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GrcPU22YikfiRPALs5F2kU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I_RHlH2NPFFg2WAYTo5Lax
          claim_id: c_mbMxPM1m8OCtwe_rkuuvhe
          source_id: s_sZPi7NxFHAWJpPui1Dt8Z2
          stance: supports
          locator: 宋人傳記資料索引(電子版)，629：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sZPi7NxFHAWJpPui1Dt8Z2
            source_type: api_record
            title: 中国历代人物传记资料库：王旭（CBDB 17838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17838&o=json
            external_identifier: CBDB:17838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.685Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GrcPU22YikfiRPALs5F2kU
        status: active
        display_name: 王旭
        merged_into_person_id: null
    - claim:
        id: c_eazlSYjVaBEFk-4YaLM34U
        subject_person_id: p_wEqsogkdLBrdte1KEpUFVQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XcKs2bGERUGdK6cYqHFdDh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X-wp9bogev8-SHnwR5gNWk
          claim_id: c_eazlSYjVaBEFk-4YaLM34U
          source_id: s_YLJn4EYGn1HDEYPRbi4kmm
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YLJn4EYGn1HDEYPRbi4kmm
            source_type: api_record
            title: 中国历代人物传记资料库：王懿（CBDB 17839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17839&o=json
            external_identifier: CBDB:17839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.687Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_XcKs2bGERUGdK6cYqHFdDh
        status: active
        display_name: 王懿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_KpUuWp9iAbJHUo2lVIWakf
        subject_person_id: p_GNHXsNxDAH8x9cA2NzPigP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wEqsogkdLBrdte1KEpUFVQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KK3BGAMVOE2hxJEcJcwogc
          claim_id: c_KpUuWp9iAbJHUo2lVIWakf
          source_id: s_GLF3W15r49867jAKaPcYZP
          stance: supports
          locator: 宋史：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GLF3W15r49867jAKaPcYZP
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 17837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17837&o=json
            external_identifier: CBDB:17837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.683Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GNHXsNxDAH8x9cA2NzPigP
        status: active
        display_name: 王言
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_iFChAq7dWD230qPDhZu-XA
        subject_person_id: p_wEqsogkdLBrdte1KEpUFVQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7YfpL25vUrnwFFcc6SBg38
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RwHfJ6tcHwpQIfAXNJfllY
          claim_id: c_iFChAq7dWD230qPDhZu-XA
          source_id: s_mQaAmDqENzDB2HX8BBBFyG
          stance: supports
          locator: 宋史：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mQaAmDqENzDB2HX8BBBFyG
            source_type: api_record
            title: 中国历代人物传记资料库：王博文（CBDB 1860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1860&o=json
            external_identifier: CBDB:1860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.351Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7YfpL25vUrnwFFcc6SBg38
        status: active
        display_name: 王博文
        merged_into_person_id: null
  other: []
---

# 王祐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祐 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aeQuz9T27oQ8FHTk36tCX7 | 王徹 | accepted |
| children | p_GrcPU22YikfiRPALs5F2kU | 王旭 | accepted |
| children | p_XcKs2bGERUGdK6cYqHFdDh | 王懿 | accepted |
| ancestors | p_GNHXsNxDAH8x9cA2NzPigP | 王言 | accepted |
| descendants | p_7YfpL25vUrnwFFcc6SBg38 | 王博文 | accepted |

## 外部来源

- [中国历代人物传记资料库：王博文（CBDB 1860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1860&o=json)
- [中国历代人物传记资料库：王徹（CBDB 37837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37837&o=json)
- [中国历代人物传记资料库：王旭（CBDB 17838）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17838&o=json)
- [中国历代人物传记资料库：王言（CBDB 17837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17837&o=json)
- [中国历代人物传记资料库：王懿（CBDB 17839）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17839&o=json)
- [中国历代人物传记资料库：王祐（CBDB 38358）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38358&o=json)
