---
schema: wang-person/v1
id: p_CLYNKsxMjYcSw7B4aiXjMt
status: active
merged_into: null
display_name: 王之賓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ep6xe6P8HqJGAndCKsmSbH
        subject_person_id: p_CLYNKsxMjYcSw7B4aiXjMt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Nhp5G8HrK6bChzXhjCbeSH
          claim_id: c_Ep6xe6P8HqJGAndCKsmSbH
          source_id: s_BVWLbCcFpibhHKh4JQvvJ2
          stance: supports
          locator: CBDB:227712
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227712）
          source: &a1
            id: s_BVWLbCcFpibhHKh4JQvvJ2
            source_type: api_record
            title: 中国历代人物传记资料库：王之賓（CBDB 227712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227712&o=json
            external_identifier: CBDB:227712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.515Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1kLgQ8bckjSFRCx69CA3x5
        subject_person_id: p_CLYNKsxMjYcSw7B4aiXjMt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王之賓，明人物。萬曆丙戌科進士進士，籍贯蒙陰，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 227712）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OduLw2ySY2P3kUshv3r7VS
          claim_id: c_1kLgQ8bckjSFRCx69CA3x5
          source_id: s_BVWLbCcFpibhHKh4JQvvJ2
          stance: supports
          locator: CBDB:227712
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1aVQFtj4zvFLYSET4OlFVC
        subject_person_id: p_hfNqr6f1P7uM2hMBq7xoJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CLYNKsxMjYcSw7B4aiXjMt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LzwY3PTzB911pwIRAKYzGN
          claim_id: c_1aVQFtj4zvFLYSET4OlFVC
          source_id: s_Swz8CDlZcwcaCV_mQ1G-Ph
          stance: supports
          locator: CBDB：兄弟 王之翰（207104）之父／母 王崇
          quotation: null
          interpretation_note: 由兄弟关系推断：王之賓 与 王之翰 为同胞（CBDB 记「弟」），王之翰 之父／母即 王之賓 之父／母。
          source:
            id: s_Swz8CDlZcwcaCV_mQ1G-Ph
            source_type: api_record
            title: 中国历代人物传记资料库：王之賓（CBDB 227712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227712&o=json
            external_identifier: CBDB:227712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hfNqr6f1P7uM2hMBq7xoJD
        status: active
        display_name: 王崇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ma9GaG2aSuQvVllGy_4DBv
        subject_person_id: p_CLYNKsxMjYcSw7B4aiXjMt
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ikcsp4RJKXWu1_4l1BVFYp
          claim_id: c_ma9GaG2aSuQvVllGy_4DBv
          source_id: s_Swz8CDlZcwcaCV_mQ1G-Ph
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207104 王之翰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Swz8CDlZcwcaCV_mQ1G-Ph
            source_type: api_record
            title: 中国历代人物传记资料库：王之賓（CBDB 227712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227712&o=json
            external_identifier: CBDB:227712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UehS2yfTZaFGBh7uxhHFCE
        status: active
        display_name: 王之翰
        merged_into_person_id: null
---

# 王之賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之賓 | accepted |
| bio.summary | 王之賓，明人物。萬曆丙戌科進士進士，籍贯蒙陰，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 227712） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hfNqr6f1P7uM2hMBq7xoJD | 王崇 | accepted |
| other | p_UehS2yfTZaFGBh7uxhHFCE | 王之翰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之賓（CBDB 227712）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227712&o=json)
