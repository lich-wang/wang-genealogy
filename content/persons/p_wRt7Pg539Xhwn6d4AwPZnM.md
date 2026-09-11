---
schema: wang-person/v1
id: p_wRt7Pg539Xhwn6d4AwPZnM
status: active
merged_into: null
display_name: 王吉芬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q1L1H87YUAW9o6xRQnSa1F
        subject_person_id: p_wRt7Pg539Xhwn6d4AwPZnM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吉芬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kvqbCCHqu8VSgYDqiQPjdh
          claim_id: c_Q1L1H87YUAW9o6xRQnSa1F
          source_id: s_Y1GgDhk68XJSVyabsRoJQQ
          stance: supports
          locator: CBDB:636493
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636493）
          source: &a1
            id: s_Y1GgDhk68XJSVyabsRoJQQ
            source_type: api_record
            title: 中国历代人物传记资料库：王吉芬（CBDB 636493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636493&o=json
            external_identifier: CBDB:636493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.011Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2iNmQHgCdmxNgyGx34JsgX
        subject_person_id: p_wRt7Pg539Xhwn6d4AwPZnM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吉芬，清人物。籍贯江蘇省，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 636493）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tknLcj22aQwofJr-JiCuih
          claim_id: c_2iNmQHgCdmxNgyGx34JsgX
          source_id: s_Y1GgDhk68XJSVyabsRoJQQ
          stance: supports
          locator: CBDB:636493
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

# 王吉芬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王吉芬 | accepted |
| bio.summary | 王吉芬，清人物。籍贯江蘇省，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 636493） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王吉芬（CBDB 636493）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636493&o=json)
