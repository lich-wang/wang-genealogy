---
schema: wang-person/v1
id: p_yLff8vvaLwKeDPpBy22z1r
status: active
merged_into: null
display_name: 姜延栴
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ssjmPmK2ek2t26aN3bnsMx
        subject_person_id: p_yLff8vvaLwKeDPpBy22z1r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 姜延栴，清人物。中国历代人物传记资料库（CBDB）以人物编号 123060 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pis5k2zuAJDRZ2OVhyhePA
          claim_id: c_ssjmPmK2ek2t26aN3bnsMx
          source_id: s_DHadrKH14QdK78N4UuJegB
          stance: supports
          locator: CBDB:123060
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_DHadrKH14QdK78N4UuJegB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：姜延栴（123060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123060&o=json
            external_identifier: CBDB:123060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:20.662Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2jm46USCD4UmhH7GvetCvy
        subject_person_id: p_yLff8vvaLwKeDPpBy22z1r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 姜延栴
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LZuo99eein9XjMN15Pw7Fe
          claim_id: c_2jm46USCD4UmhH7GvetCvy
          source_id: s_DHadrKH14QdK78N4UuJegB
          stance: supports
          locator: Q45664395
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_WV8Sxf1qbiy229WJzk31gM
          claim_id: c_2jm46USCD4UmhH7GvetCvy
          source_id: s_h4oQde8BPH6F8dGkoiPKZZ
          stance: supports
          locator: Q45664395
          quotation: null
          interpretation_note: null
          source:
            id: s_h4oQde8BPH6F8dGkoiPKZZ
            source_type: api_record
            title: 维基数据：姜延栴（Q45664395）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664395
            external_identifier: Q45664395
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:20.507Z
            metadata_json: null
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

# 姜延栴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 姜延栴，清人物。中国历代人物传记资料库（CBDB）以人物编号 123060 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 姜延栴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：姜延栴（Q45664395）](https://www.wikidata.org/wiki/Q45664395)
- [CBDB 中国历代人物传记资料库：姜延栴（123060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123060&o=json)
