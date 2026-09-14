---
schema: wang-person/v1
id: p_g9Gg9bo5HdEWZ1pBbBB64S
status: active
merged_into: null
display_name: 王葵
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LGjjp3bkYjVCVLeJ1xweKP
        subject_person_id: p_g9Gg9bo5HdEWZ1pBbBB64S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王葵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bQjNgVTK1B3QZ7Xt9euKC2
          claim_id: c_LGjjp3bkYjVCVLeJ1xweKP
          source_id: s_o7tD94kyXt4iRHGa8o4wi7
          stance: supports
          locator: CBDB:386682
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（386682）
          source: &a1
            id: s_o7tD94kyXt4iRHGa8o4wi7
            source_type: api_record
            title: 中国历代人物传记资料库：王葵（CBDB 386682）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386682&o=json
            external_identifier: CBDB:386682
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.901Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YhBrXq7oYqTQKoWhzaNMPH
        subject_person_id: p_g9Gg9bo5HdEWZ1pBbBB64S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王葵，明人物。籍贯金華。（中国历代人物传记资料库 CBDB 386682）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oim5ItHP3eNQFxm6QmLvY-
          claim_id: c_YhBrXq7oYqTQKoWhzaNMPH
          source_id: s_o7tD94kyXt4iRHGa8o4wi7
          stance: supports
          locator: CBDB:386682
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gf_fiQYSxrK__W3KGx0vCq
        subject_person_id: p_7iL2YaUSwb4m6n9tZWZ4k5
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_g9Gg9bo5HdEWZ1pBbBB64S
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jCDsKbwcvpX3EbuLFuZrsi
          claim_id: c_gf_fiQYSxrK__W3KGx0vCq
          source_id: s_oAhMZABFq0bODTS_DM-JpO
          stance: supports
          locator: CBDB 亲属：母（KinPerson 386677）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_oAhMZABFq0bODTS_DM-JpO
            source_type: api_record
            title: 中国历代人物传记资料库：王葵（CBDB 386682）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386682&o=json
            external_identifier: CBDB:386682
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7iL2YaUSwb4m6n9tZWZ4k5
        status: active
        display_name: 唐氏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王葵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王葵 | accepted |
| bio.summary | 王葵，明人物。籍贯金華。（中国历代人物传记资料库 CBDB 386682） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7iL2YaUSwb4m6n9tZWZ4k5 | 唐氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王葵（CBDB 386682）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386682&o=json)
