---
schema: wang-person/v1
id: p_XCU1RohVKCq944JUJw4Pfd
status: active
merged_into: null
display_name: 王桐齡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XuW3k5A1o424V4bEkMS5bx
        subject_person_id: p_XCU1RohVKCq944JUJw4Pfd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桐齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_32ZvK7JtDMZkw5yGAHUow6
          claim_id: c_XuW3k5A1o424V4bEkMS5bx
          source_id: s_esqzDv14GiGEJmizKDBtXg
          stance: supports
          locator: CBDB:638720
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638720）
          source: &a1
            id: s_esqzDv14GiGEJmizKDBtXg
            source_type: api_record
            title: 中国历代人物传记资料库：王桐齡（CBDB 638720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638720&o=json
            external_identifier: CBDB:638720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.745Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ruQPghoaf2N2AhMZQyYrKf
        subject_person_id: p_XCU1RohVKCq944JUJw4Pfd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桐齡，清人物。籍贯錦縣，入仕增廣生; 增廣生員，曾任典史。（中国历代人物传记资料库 CBDB 638720）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4AMh8EanH6Zbi0h6k24DTK
          claim_id: c_ruQPghoaf2N2AhMZQyYrKf
          source_id: s_esqzDv14GiGEJmizKDBtXg
          stance: supports
          locator: CBDB:638720
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

# 王桐齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桐齡 | accepted |
| bio.summary | 王桐齡，清人物。籍贯錦縣，入仕增廣生; 增廣生員，曾任典史。（中国历代人物传记资料库 CBDB 638720） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王桐齡（CBDB 638720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638720&o=json)
