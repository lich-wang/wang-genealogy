---
schema: wang-person/v1
id: p_PCP9QfWuKpzt858Q6DREVH
status: active
merged_into: null
display_name: 王士臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vax5akuB28AD9xb2J86GEK
        subject_person_id: p_PCP9QfWuKpzt858Q6DREVH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o52xj1e1fBDEPsbCTC377T
          claim_id: c_Vax5akuB28AD9xb2J86GEK
          source_id: s_t1C2fmPikPJ7TjW8Vw9xua
          stance: supports
          locator: CBDB:636816
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636816）
          source: &a1
            id: s_t1C2fmPikPJ7TjW8Vw9xua
            source_type: api_record
            title: 中国历代人物传记资料库：王士臣（CBDB 636816）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636816&o=json
            external_identifier: CBDB:636816
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.114Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JHRfoNEfneWjFkbyfWG5jd
        subject_person_id: p_PCP9QfWuKpzt858Q6DREVH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士臣，清人物。籍贯資州直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 636816）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IDFzCxap3VdJZIqqtzZXeA
          claim_id: c_JHRfoNEfneWjFkbyfWG5jd
          source_id: s_t1C2fmPikPJ7TjW8Vw9xua
          stance: supports
          locator: CBDB:636816
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

# 王士臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士臣 | accepted |
| bio.summary | 王士臣，清人物。籍贯資州直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 636816） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士臣（CBDB 636816）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636816&o=json)
