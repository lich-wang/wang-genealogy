---
schema: wang-person/v1
id: p_Munw8w4jYw8TUpQJ4b4DDo
status: active
merged_into: null
display_name: 王野
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Pp6hNmuYTCXW8B8A77gvgf
        subject_person_id: p_Munw8w4jYw8TUpQJ4b4DDo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王野
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Mn7zKq4w4E2vPedBp5Ca41
          claim_id: c_Pp6hNmuYTCXW8B8A77gvgf
          source_id: s_AChg2BWLG9RxQsVN5P3QBK
          stance: supports
          locator: CBDB:98047
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（98047）
          source: &a1
            id: s_AChg2BWLG9RxQsVN5P3QBK
            source_type: api_record
            title: 中国历代人物传记资料库：王野（CBDB 98047）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=98047&o=json
            external_identifier: CBDB:98047
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.305Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ENdfCJjVxxGP7ByeywxXFq
        subject_person_id: p_Munw8w4jYw8TUpQJ4b4DDo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王野，宋人物。曾任通奉大夫、通判、中奉大夫。（中国历代人物传记资料库 CBDB 98047）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bo3QEhK_lQ8-sYOlH4Clts
          claim_id: c_ENdfCJjVxxGP7ByeywxXFq
          source_id: s_AChg2BWLG9RxQsVN5P3QBK
          stance: supports
          locator: CBDB:98047
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王野

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王野 | accepted |
| bio.summary | 王野，宋人物。曾任通奉大夫、通判、中奉大夫。（中国历代人物传记资料库 CBDB 98047） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王野（CBDB 98047）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=98047&o=json)
