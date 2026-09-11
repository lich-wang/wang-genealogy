---
schema: wang-person/v1
id: p_WEJ814oFjSBFprr4ucccVG
status: active
merged_into: null
display_name: 王希聖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LpiWLXbp2mDJPAdEaHokFE
        subject_person_id: p_WEJ814oFjSBFprr4ucccVG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希聖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9oD34WFeofk1QDFuLspR1o
          claim_id: c_LpiWLXbp2mDJPAdEaHokFE
          source_id: s_mr4tgZq6EfBy8V9egv6DEz
          stance: supports
          locator: CBDB:490920
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（490920）
          source: &a1
            id: s_mr4tgZq6EfBy8V9egv6DEz
            source_type: api_record
            title: 中国历代人物传记资料库：王希聖（CBDB 490920）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490920&o=json
            external_identifier: CBDB:490920
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.151Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fJQYY2HtZcvtDTJvHh8PNh
        subject_person_id: p_WEJ814oFjSBFprr4ucccVG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王希聖，清人物。入仕學校: 生員(庠生)，曾任知州。（中国历代人物传记资料库 CBDB 490920）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NYN4n79a4XE7iuscpPMqZZ
          claim_id: c_fJQYY2HtZcvtDTJvHh8PNh
          source_id: s_mr4tgZq6EfBy8V9egv6DEz
          stance: supports
          locator: CBDB:490920
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

# 王希聖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希聖 | accepted |
| bio.summary | 王希聖，清人物。入仕學校: 生員(庠生)，曾任知州。（中国历代人物传记资料库 CBDB 490920） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王希聖（CBDB 490920）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490920&o=json)
