---
schema: wang-person/v1
id: p_PdBPJVHqizEMUoTmb638jr
status: active
merged_into: null
display_name: 王瓚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oeiCEC9qP4HYiteVQHEpce
        subject_person_id: p_PdBPJVHqizEMUoTmb638jr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HcHjPdDAft7isXd5B9Sn3A
          claim_id: c_oeiCEC9qP4HYiteVQHEpce
          source_id: s_cQgqQM6MPxN5HNJ4LNgLZy
          stance: supports
          locator: CBDB:198693
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198693）
          source: &a1
            id: s_cQgqQM6MPxN5HNJ4LNgLZy
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 198693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198693&o=json
            external_identifier: CBDB:198693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.506Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JThY4vhdvY7nfzwf9FLv4A
        subject_person_id: p_PdBPJVHqizEMUoTmb638jr
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1430年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ScqQ6HR7g6PQspj73X6wC7
          claim_id: c_JThY4vhdvY7nfzwf9FLv4A
          source_id: s_cQgqQM6MPxN5HNJ4LNgLZy
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_azatHE3hRQVKWUcMB4Pckz
        subject_person_id: p_PdBPJVHqizEMUoTmb638jr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PMkA5UfaLVhD5AdSVVXe2K
          claim_id: c_azatHE3hRQVKWUcMB4Pckz
          source_id: s_cQgqQM6MPxN5HNJ4LNgLZy
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_s5SvsEC5hCAca2C5KNS2d-
        subject_person_id: p_oUb5sB73dC3KZFbPKC8ymf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PdBPJVHqizEMUoTmb638jr
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UTqRoOW974jJLZeIr0jHTz
          claim_id: c_s5SvsEC5hCAca2C5KNS2d-
          source_id: s_KCuTieHdb7tuR1uP74izb1
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第一百四十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KCuTieHdb7tuR1uP74izb1
            source_type: api_record
            title: 中国历代人物传记资料库：王天祐（CBDB 304725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304725&o=json
            external_identifier: CBDB:304725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.728Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oUb5sB73dC3KZFbPKC8ymf
        status: active
        display_name: 王天祐
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王瓚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓚 | accepted |
| birth.date | 1430年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_oUb5sB73dC3KZFbPKC8ymf | 王天祐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王天祐（CBDB 304725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304725&o=json)
- [中国历代人物传记资料库：王瓚（CBDB 198693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198693&o=json)
