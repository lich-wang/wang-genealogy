---
schema: wang-person/v1
id: p_BjtJkBxhk63itmxeSvJMBt
status: active
merged_into: null
display_name: 王麟瑞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AoSriTfjFAk7EqxPjG7BfC
        subject_person_id: p_BjtJkBxhk63itmxeSvJMBt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DgxG7Qz6GqyWu6T4Q9yQnM
          claim_id: c_AoSriTfjFAk7EqxPjG7BfC
          source_id: s_WV7mAc5Er2tLHMdScXFfWR
          stance: supports
          locator: CBDB:123581
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（123581）
          source: &a1
            id: s_WV7mAc5Er2tLHMdScXFfWR
            source_type: api_record
            title: 中国历代人物传记资料库：王麟瑞（CBDB 123581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123581&o=json
            external_identifier: CBDB:123581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.934Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e3LsNcJxMxH1QwcRMwNWNW
        subject_person_id: p_BjtJkBxhk63itmxeSvJMBt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王麟瑞，清人物。籍贯南靖，入仕學校: 生員(庠生)，曾任道監察御史、戶部陜西司員外郎、知府。（中国历代人物传记资料库 CBDB 123581）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-mM7RtorXnggWZcKFm6AgY
          claim_id: c_e3LsNcJxMxH1QwcRMwNWNW
          source_id: s_WV7mAc5Er2tLHMdScXFfWR
          stance: supports
          locator: CBDB:123581
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

# 王麟瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王麟瑞 | accepted |
| bio.summary | 王麟瑞，清人物。籍贯南靖，入仕學校: 生員(庠生)，曾任道監察御史、戶部陜西司員外郎、知府。（中国历代人物传记资料库 CBDB 123581） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王麟瑞（CBDB 123581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123581&o=json)
