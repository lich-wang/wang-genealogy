---
schema: wang-person/v1
id: p_V8jynzKLZNGYw9PD8YeQik
status: active
merged_into: null
display_name: 王師虞
cbdb_id: 23164
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SoQQVviyJXD5LJHPrYfoyf
        subject_person_id: p_V8jynzKLZNGYw9PD8YeQik
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師虞，宋人物。籍贯太平。（中国历代人物传记资料库 CBDB 23164）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_s8JUv6527yszTqEVQ01z3L
          claim_id: c_SoQQVviyJXD5LJHPrYfoyf
          source_id: s_9svjqmFCFKoJLUxB9BjVCA
          stance: supports
          locator: CBDB:23164
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_9svjqmFCFKoJLUxB9BjVCA
            source_type: api_record
            title: 中国历代人物传记资料库：王師虞（CBDB 23164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23164&o=json
            external_identifier: CBDB:23164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CQQrsrS7QJMYYuKSUY2DyE
        subject_person_id: p_V8jynzKLZNGYw9PD8YeQik
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師虞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7nEHusRLFaKqY2CcGUUMNi
          claim_id: c_CQQrsrS7QJMYYuKSUY2DyE
          source_id: s_9svjqmFCFKoJLUxB9BjVCA
          stance: supports
          locator: CBDB:23164
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6HOkiAp1rSFP43CbkkR52T
        subject_person_id: p_xbfi1GF4YNFb48NcK3Vo5C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V8jynzKLZNGYw9PD8YeQik
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gb74FsGm3eKYKCPVliHTSw
          claim_id: c_6HOkiAp1rSFP43CbkkR52T
          source_id: s_9svjqmFCFKoJLUxB9BjVCA
          stance: supports
          locator: CBDB 双向互证（父 王冉榮 ⇄ 子 王師虞）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_9svjqmFCFKoJLUxB9BjVCA
            source_type: api_record
            title: 中国历代人物传记资料库：王師虞（CBDB 23164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23164&o=json
            external_identifier: CBDB:23164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_xbfi1GF4YNFb48NcK3Vo5C
        status: active
        display_name: 王冉榮
        merged_into_person_id: null
  children:
    - claim:
        id: c_RNBL2XDmzfXXlwTDocGC3T
        subject_person_id: p_V8jynzKLZNGYw9PD8YeQik
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AA5t38FYmMKS3bwu19tA67
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pm9sPdR0Qf-jjlVcCJ8ldn
          claim_id: c_RNBL2XDmzfXXlwTDocGC3T
          source_id: s_QBy2oKe5jHFnjTwWrJqN1F
          stance: supports
          locator: CBDB 双向互证（父 王師虞 ⇄ 子 王景略）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_QBy2oKe5jHFnjTwWrJqN1F
            source_type: api_record
            title: 中国历代人物传记资料库：王景略（CBDB 23165）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23165&o=json
            external_identifier: CBDB:23165
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_AA5t38FYmMKS3bwu19tA67
        status: active
        display_name: 王景略
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王師虞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王師虞，宋人物。籍贯太平。（中国历代人物传记资料库 CBDB 23164） | accepted |
| name.primary | 王師虞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xbfi1GF4YNFb48NcK3Vo5C | 王冉榮 | accepted |
| children | p_AA5t38FYmMKS3bwu19tA67 | 王景略 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景略（CBDB 23165）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23165&o=json)
- [中国历代人物传记资料库：王師虞（CBDB 23164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23164&o=json)
