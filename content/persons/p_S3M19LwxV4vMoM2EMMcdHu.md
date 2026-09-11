---
schema: wang-person/v1
id: p_S3M19LwxV4vMoM2EMMcdHu
status: active
merged_into: null
display_name: 王叔獻
cbdb_id: 22881
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Pp3RSA7m3cmdw6749KdEa3
        subject_person_id: p_S3M19LwxV4vMoM2EMMcdHu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔獻，宋人物。中国历代人物传记资料库（CBDB）以人物编号 22881 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_pyKZT2NTMRe3TINXfkEB5c
          claim_id: c_Pp3RSA7m3cmdw6749KdEa3
          source_id: s_13P83DWEkpMZBazMdNtepJ
          stance: supports
          locator: CBDB:22881
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_13P83DWEkpMZBazMdNtepJ
            source_type: api_record
            title: 中国历代人物传记资料库：王叔獻（CBDB 22881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22881&o=json
            external_identifier: CBDB:22881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_W6g4RPe7NswqqWzFBDGcHN
        subject_person_id: p_S3M19LwxV4vMoM2EMMcdHu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔獻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BXyC1mjwSpBpqFKErM1Udp
          claim_id: c_W6g4RPe7NswqqWzFBDGcHN
          source_id: s_13P83DWEkpMZBazMdNtepJ
          stance: supports
          locator: CBDB:22881
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_13P83DWEkpMZBazMdNtepJ
            source_type: api_record
            title: 中国历代人物传记资料库：王叔獻（CBDB 22881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22881&o=json
            external_identifier: CBDB:22881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_RhBCULDFeTL2tHXXDgIwsk
        subject_person_id: p_S3M19LwxV4vMoM2EMMcdHu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SmPfz1GTyTHvivAq4Anp7g
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BhJvuDMmo1Xp5zYNKXoikg
          claim_id: c_RhBCULDFeTL2tHXXDgIwsk
          source_id: s_Y2W746BP2sur14p96YhEgE
          stance: supports
          locator: CBDB 双向互证（父 王叔獻 ⇄ 子 王君卿）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Y2W746BP2sur14p96YhEgE
            source_type: api_record
            title: 中国历代人物传记资料库：王君卿（CBDB 22882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22882&o=json
            external_identifier: CBDB:22882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.863Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_SmPfz1GTyTHvivAq4Anp7g
        status: active
        display_name: 王君卿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王叔獻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王叔獻，宋人物。中国历代人物传记资料库（CBDB）以人物编号 22881 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王叔獻 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_SmPfz1GTyTHvivAq4Anp7g | 王君卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王君卿（CBDB 22882）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22882&o=json)
- [中国历代人物传记资料库：王叔獻（CBDB 22881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22881&o=json)
