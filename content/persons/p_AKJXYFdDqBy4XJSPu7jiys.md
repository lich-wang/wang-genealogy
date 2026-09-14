---
schema: wang-person/v1
id: p_AKJXYFdDqBy4XJSPu7jiys
status: active
merged_into: null
display_name: 王鍔
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YXdaGar9L89phvGVsPjBWE
        subject_person_id: p_AKJXYFdDqBy4XJSPu7jiys
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Tc1LNnBBiZh5vXUswJNTrH
          claim_id: c_YXdaGar9L89phvGVsPjBWE
          source_id: s_32GRhbYGh15UHY8N4LtXwP
          stance: supports
          locator: CBDB:290160
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（290160）
          source: &a1
            id: s_32GRhbYGh15UHY8N4LtXwP
            source_type: api_record
            title: 中国历代人物传记资料库：王鍔（CBDB 290160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290160&o=json
            external_identifier: CBDB:290160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.322Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xxdb8cPjb5JJbNQA6Hues3
        subject_person_id: p_AKJXYFdDqBy4XJSPu7jiys
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍔，明人物。嘉靖八年進士，籍贯灤州。（中国历代人物传记资料库 CBDB 290160）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Vt0CZyQ4du_DoDci0t5Ul7
          claim_id: c_Xxdb8cPjb5JJbNQA6Hues3
          source_id: s_32GRhbYGh15UHY8N4LtXwP
          stance: supports
          locator: CBDB:290160
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FvsZQFJqu40S1eBWlR16Rl
        subject_person_id: p_gGs45wBLrz1PrQ7nJg3Ni8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AKJXYFdDqBy4XJSPu7jiys
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-SFIBmUs6EwY7EBrEfzEUv
          claim_id: c_FvsZQFJqu40S1eBWlR16Rl
          source_id: s_oSLWl9cKrcIqRcBdgXSe6W
          stance: supports
          locator: CBDB：兄弟 王鎬（126866）之父／母 王璋
          quotation: null
          interpretation_note: 由兄弟关系推断：王鍔 与 王鎬 为同胞（CBDB 记「兄」），王鎬 之父／母即 王鍔 之父／母。
          source:
            id: s_oSLWl9cKrcIqRcBdgXSe6W
            source_type: api_record
            title: 中国历代人物传记资料库：王鍔（CBDB 290160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290160&o=json
            external_identifier: CBDB:290160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gGs45wBLrz1PrQ7nJg3Ni8
        status: active
        display_name: 王璋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_RQPSXvBU3cEq6v-Dd8quXs
        subject_person_id: p_8fLyT7ZEVM5q6B59fHgKMb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_AKJXYFdDqBy4XJSPu7jiys
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7NGaRUjnsuABYf87G34DTA
          claim_id: c_RQPSXvBU3cEq6v-Dd8quXs
          source_id: s_oSLWl9cKrcIqRcBdgXSe6W
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126866 王鎬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oSLWl9cKrcIqRcBdgXSe6W
            source_type: api_record
            title: 中国历代人物传记资料库：王鍔（CBDB 290160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290160&o=json
            external_identifier: CBDB:290160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8fLyT7ZEVM5q6B59fHgKMb
        status: active
        display_name: 王鎬
        merged_into_person_id: null
---

# 王鍔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍔 | accepted |
| bio.summary | 王鍔，明人物。嘉靖八年進士，籍贯灤州。（中国历代人物传记资料库 CBDB 290160） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gGs45wBLrz1PrQ7nJg3Ni8 | 王璋 | accepted |
| other | p_8fLyT7ZEVM5q6B59fHgKMb | 王鎬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鍔（CBDB 290160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290160&o=json)
