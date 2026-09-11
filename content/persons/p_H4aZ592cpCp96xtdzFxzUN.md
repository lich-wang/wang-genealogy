---
schema: wang-person/v1
id: p_H4aZ592cpCp96xtdzFxzUN
status: active
merged_into: null
display_name: 王之深
cbdb_id: 13953
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CHfAaaMPgP5s5L5S1f8x7b
        subject_person_id: p_H4aZ592cpCp96xtdzFxzUN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之深，宋人物。中国历代人物传记资料库（CBDB）以人物编号 13953 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_JdoJRdi92_S57wMcdn8Igh
          claim_id: c_CHfAaaMPgP5s5L5S1f8x7b
          source_id: s_yfn684qSrmwDNpUJL1FG5d
          stance: supports
          locator: CBDB:13953
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_yfn684qSrmwDNpUJL1FG5d
            source_type: api_record
            title: 中国历代人物传记资料库：王之深（CBDB 13953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13953&o=json
            external_identifier: CBDB:13953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AED9U6JUhouBL9LxdNjBJC
        subject_person_id: p_H4aZ592cpCp96xtdzFxzUN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之深
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GAhPFGNBAbLJ2NCkQw5sr5
          claim_id: c_AED9U6JUhouBL9LxdNjBJC
          source_id: s_yfn684qSrmwDNpUJL1FG5d
          stance: supports
          locator: CBDB:13953
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_yfn684qSrmwDNpUJL1FG5d
            source_type: api_record
            title: 中国历代人物传记资料库：王之深（CBDB 13953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13953&o=json
            external_identifier: CBDB:13953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Gx1xT91pc8KMC9dcmctzpu
        subject_person_id: p_XLkZGVxRBQSEaHVjzv1aDG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H4aZ592cpCp96xtdzFxzUN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MF3RgDzXN5REBwJer5_aTj
          claim_id: c_Gx1xT91pc8KMC9dcmctzpu
          source_id: s_N21HDxQ1i5Pe7s6Q2gNTBa
          stance: supports
          locator: CBDB 双向互证（子 王之深 ⇄ 父 王奇）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_N21HDxQ1i5Pe7s6Q2gNTBa
            source_type: api_record
            title: 中国历代人物传记资料库：王奇（CBDB 25667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25667&o=json
            external_identifier: CBDB:25667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_XLkZGVxRBQSEaHVjzv1aDG
        status: active
        display_name: 王奇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王之深

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王之深，宋人物。中国历代人物传记资料库（CBDB）以人物编号 13953 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王之深 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XLkZGVxRBQSEaHVjzv1aDG | 王奇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王奇（CBDB 25667）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25667&o=json)
- [中国历代人物传记资料库：王之深（CBDB 13953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13953&o=json)
