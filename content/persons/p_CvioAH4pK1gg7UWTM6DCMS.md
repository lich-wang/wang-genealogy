---
schema: wang-person/v1
id: p_CvioAH4pK1gg7UWTM6DCMS
status: active
merged_into: null
display_name: 王珪
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8nh3DbFWNVrXfimVBa2bWo
        subject_person_id: p_CvioAH4pK1gg7UWTM6DCMS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wUZfCwkzgCPe4niFwgzUnb
          claim_id: c_8nh3DbFWNVrXfimVBa2bWo
          source_id: s_n3ymfZH77pu6t1VuF2KQbC
          stance: supports
          locator: CBDB:198426
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198426）
          source: &a1
            id: s_n3ymfZH77pu6t1VuF2KQbC
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 198426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198426&o=json
            external_identifier: CBDB:198426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.490Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_jWyKuzR72LzhTng7YrgN4L
        subject_person_id: p_CvioAH4pK1gg7UWTM6DCMS
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1425年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4SYV4C3fg5HhJ9Lqz3unJk
          claim_id: c_jWyKuzR72LzhTng7YrgN4L
          source_id: s_n3ymfZH77pu6t1VuF2KQbC
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
        id: c_cMonBHc8zbjDagk4QF5HCQ
        subject_person_id: p_CvioAH4pK1gg7UWTM6DCMS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪（生于1425年），明人物。景泰五年進士，籍贯松江守禦千戶所，入仕進士。（中国历代人物传记资料库 CBDB 198426）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DQXN50mAjMXT8P43c3fsgm
          claim_id: c_cMonBHc8zbjDagk4QF5HCQ
          source_id: s_n3ymfZH77pu6t1VuF2KQbC
          stance: supports
          locator: CBDB:198426
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KOJAAJI1xbnGXdeNBGK8H3
        subject_person_id: p_iBEGCX4PVUP88xatAFkBy4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CvioAH4pK1gg7UWTM6DCMS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0SURc2ZHEnWOHu77Yaj-uC
          claim_id: c_KOJAAJI1xbnGXdeNBGK8H3
          source_id: s_k51AENJkRjnNPUmvaULeCa
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百零三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_k51AENJkRjnNPUmvaULeCa
            source_type: api_record
            title: 中国历代人物传记资料库：王士安（CBDB 270650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270650&o=json
            external_identifier: CBDB:270650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.842Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iBEGCX4PVUP88xatAFkBy4
        status: active
        display_name: 王士安
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_wXReHPcTuwSeOlKdcUydv5
        subject_person_id: p_8cVjN2F6e4z4TDW3w4YdEg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CvioAH4pK1gg7UWTM6DCMS
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FpuV1F8FRVs_mJOiNz6Iid
          claim_id: c_wXReHPcTuwSeOlKdcUydv5
          source_id: s_Db2VAuKCA2JEw8Kq16SF4s
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百零三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Db2VAuKCA2JEw8Kq16SF4s
            source_type: api_record
            title: 中国历代人物传记资料库：王伍（CBDB 270639）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270639&o=json
            external_identifier: CBDB:270639
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.840Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8cVjN2F6e4z4TDW3w4YdEg
        status: active
        display_name: 王伍
        merged_into_person_id: null
    - claim:
        id: c_iGYe9n-t_qwj46qEXsgq-m
        subject_person_id: p_nUEqPYrvDXtvPPHARECSus
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CvioAH4pK1gg7UWTM6DCMS
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uhnG52n_XYjjFP8Moaz912
          claim_id: c_iGYe9n-t_qwj46qEXsgq-m
          source_id: s_LGiptT89Yjt7ZtGGBb2xFa
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百零三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LGiptT89Yjt7ZtGGBb2xFa
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 270627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270627&o=json
            external_identifier: CBDB:270627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.840Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nUEqPYrvDXtvPPHARECSus
        status: active
        display_name: 王義
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_hj7nBxqsJOOsH9jf430CXj
        subject_person_id: p_CvioAH4pK1gg7UWTM6DCMS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZM7rXFHSqnZtQ8K9spE336
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9tBIUcC1jnV-IkL6WwrPWd
          claim_id: c_hj7nBxqsJOOsH9jf430CXj
          source_id: s_5uKNVWpN57fwHD0inhVERZ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198426 王珪）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5uKNVWpN57fwHD0inhVERZ
            source_type: api_record
            title: 中国历代人物传记资料库：王頊（CBDB 270705）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270705&o=json
            external_identifier: CBDB:270705
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZM7rXFHSqnZtQ8K9spE336
        status: active
        display_name: 王頊
        merged_into_person_id: null
    - claim:
        id: c_ymlDWoaICOfMQh8m7pBt3J
        subject_person_id: p_CvioAH4pK1gg7UWTM6DCMS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nme6vYLbU2RRsYiQMa5kDS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u3qZ7ve0T4kHspp7D_bu8M
          claim_id: c_ymlDWoaICOfMQh8m7pBt3J
          source_id: s_4EG6g9y5KFTsxxzIP66Lqx
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198426 王珪）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4EG6g9y5KFTsxxzIP66Lqx
            source_type: api_record
            title: 中国历代人物传记资料库：王璋（CBDB 270694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270694&o=json
            external_identifier: CBDB:270694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nme6vYLbU2RRsYiQMa5kDS
        status: active
        display_name: 王璋
        merged_into_person_id: null
---

# 王珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珪 | accepted |
| birth.date | 1425年 | accepted |
| bio.summary | 王珪（生于1425年），明人物。景泰五年進士，籍贯松江守禦千戶所，入仕進士。（中国历代人物传记资料库 CBDB 198426） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iBEGCX4PVUP88xatAFkBy4 | 王士安 | accepted |
| ancestors | p_8cVjN2F6e4z4TDW3w4YdEg | 王伍 | accepted |
| ancestors | p_nUEqPYrvDXtvPPHARECSus | 王義 | accepted |
| other | p_ZM7rXFHSqnZtQ8K9spE336 | 王頊 | accepted |
| other | p_nme6vYLbU2RRsYiQMa5kDS | 王璋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珪（CBDB 198426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198426&o=json)
- [中国历代人物传记资料库：王士安（CBDB 270650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270650&o=json)
- [中国历代人物传记资料库：王伍（CBDB 270639）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270639&o=json)
- [中国历代人物传记资料库：王頊（CBDB 270705）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270705&o=json)
- [中国历代人物传记资料库：王義（CBDB 270627）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270627&o=json)
- [中国历代人物传记资料库：王璋（CBDB 270694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270694&o=json)
