---
schema: wang-person/v1
id: p_KLU9Psur1AsU89H8q3MRAb
status: active
merged_into: null
display_name: 王啟疆
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K9aW1zv2DJ81ZeRK8wND4s
        subject_person_id: p_KLU9Psur1AsU89H8q3MRAb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟疆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6BRQTNVmEBv2AGZiQ72eVp
          claim_id: c_K9aW1zv2DJ81ZeRK8wND4s
          source_id: s_FgxZ4ZEHVxRa1n4PNHunHE
          stance: supports
          locator: CBDB:222819
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（222819）
          source: &a1
            id: s_FgxZ4ZEHVxRa1n4PNHunHE
            source_type: api_record
            title: 中国历代人物传记资料库：王啟疆（CBDB 222819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222819&o=json
            external_identifier: CBDB:222819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.396Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JxaKLnVYDsWm1sGXJHTDhP
        subject_person_id: p_KLU9Psur1AsU89H8q3MRAb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王啟疆，明人物。萬曆十一年進士，籍贯金壇，入仕貢生: 歲貢、常貢、挨貢，曾任訓導。（中国历代人物传记资料库 CBDB 222819）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_x0g4yhzQW4fWyzn5qFlCS5
          claim_id: c_JxaKLnVYDsWm1sGXJHTDhP
          source_id: s_FgxZ4ZEHVxRa1n4PNHunHE
          stance: supports
          locator: CBDB:222819
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_U9p69nB9EMcszodCOXLPK4
        subject_person_id: p_oruQD3pLHzNQ8AvU3GVazK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KLU9Psur1AsU89H8q3MRAb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7XKXEpXhaqm35oKBhfEeVF
          claim_id: c_U9p69nB9EMcszodCOXLPK4
          source_id: s_OEEbj4EgdaXio76Pwl9fNk
          stance: supports
          locator: CBDB：兄弟 王堯封（126717）之父／母 王維熊
          quotation: null
          interpretation_note: 由兄弟关系推断：王啟疆 与 王堯封 为同胞（CBDB 记「兄」），王堯封 之父／母即 王啟疆 之父／母。
          source:
            id: s_OEEbj4EgdaXio76Pwl9fNk
            source_type: api_record
            title: 中国历代人物传记资料库：王啟疆（CBDB 222819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222819&o=json
            external_identifier: CBDB:222819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oruQD3pLHzNQ8AvU3GVazK
        status: active
        display_name: 王維熊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_BgG1oMWSNLmlBdNmGyYFU3
        subject_person_id: p_DpuSp4mmLYMfmUMioXctjR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_KLU9Psur1AsU89H8q3MRAb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NQ3fHJAY87QbjOPABiHCeJ
          claim_id: c_BgG1oMWSNLmlBdNmGyYFU3
          source_id: s_OEEbj4EgdaXio76Pwl9fNk
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126717 王堯封）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OEEbj4EgdaXio76Pwl9fNk
            source_type: api_record
            title: 中国历代人物传记资料库：王啟疆（CBDB 222819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222819&o=json
            external_identifier: CBDB:222819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DpuSp4mmLYMfmUMioXctjR
        status: active
        display_name: 王堯封
        merged_into_person_id: null
---

# 王啟疆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟疆 | accepted |
| bio.summary | 王啟疆，明人物。萬曆十一年進士，籍贯金壇，入仕貢生: 歲貢、常貢、挨貢，曾任訓導。（中国历代人物传记资料库 CBDB 222819） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oruQD3pLHzNQ8AvU3GVazK | 王維熊 | accepted |
| other | p_DpuSp4mmLYMfmUMioXctjR | 王堯封 | accepted |

## 外部来源

- [中国历代人物传记资料库：王啟疆（CBDB 222819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222819&o=json)
