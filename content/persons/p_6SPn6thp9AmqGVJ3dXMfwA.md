---
schema: wang-person/v1
id: p_6SPn6thp9AmqGVJ3dXMfwA
status: active
merged_into: null
display_name: 王雋卿
cbdb_id: 22243
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PFEfKzyiB7YawcizocEQSj
        subject_person_id: p_6SPn6thp9AmqGVJ3dXMfwA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雋卿，宋人物。中国历代人物传记资料库（CBDB）以人物编号 22243 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_sRiovt2zdXCDnkEOgusAin
          claim_id: c_PFEfKzyiB7YawcizocEQSj
          source_id: s_1CJ9wnd3YCCoXD35Uubb3Z
          stance: supports
          locator: CBDB:22243
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_1CJ9wnd3YCCoXD35Uubb3Z
            source_type: api_record
            title: 中国历代人物传记资料库：王雋卿（CBDB 22243）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22243&o=json
            external_identifier: CBDB:22243
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_E1D8hRiBFLu92NELF1VuU1
        subject_person_id: p_6SPn6thp9AmqGVJ3dXMfwA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雋卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_affEp3M7a17BBdCLpxkod5
          claim_id: c_E1D8hRiBFLu92NELF1VuU1
          source_id: s_1CJ9wnd3YCCoXD35Uubb3Z
          stance: supports
          locator: CBDB:22243
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_1CJ9wnd3YCCoXD35Uubb3Z
            source_type: api_record
            title: 中国历代人物传记资料库：王雋卿（CBDB 22243）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22243&o=json
            external_identifier: CBDB:22243
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RDPKz38AWt8t2_0TOuBdXY
        subject_person_id: p_znCpHkj9Wovs2kmQ9yEwwD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6SPn6thp9AmqGVJ3dXMfwA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1gG04A-pW8Q34yXJ_ZFTSm
          claim_id: c_RDPKz38AWt8t2_0TOuBdXY
          source_id: s_NBNWKy2BsD6nuQ5ACQcax8
          stance: supports
          locator: CBDB 双向互证（子 王雋卿 ⇄ 父 王煥之）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_NBNWKy2BsD6nuQ5ACQcax8
            source_type: api_record
            title: 中国历代人物传记资料库：王煥之（CBDB 22242）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22242&o=json
            external_identifier: CBDB:22242
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.861Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_znCpHkj9Wovs2kmQ9yEwwD
        status: active
        display_name: 王煥之
        merged_into_person_id: null
  children:
    - claim:
        id: c_s233mY_6issQVPxLra7Qo1
        subject_person_id: p_6SPn6thp9AmqGVJ3dXMfwA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kiqfR3ebLRfZwsFStCJHnu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HH0FqRYhE3QkndIZKWiBRA
          claim_id: c_s233mY_6issQVPxLra7Qo1
          source_id: s_JNVEL29fpLdQjeQLsuLBte
          stance: supports
          locator: CBDB 双向互证（父 王雋卿 ⇄ 子 王奎）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_JNVEL29fpLdQjeQLsuLBte
            source_type: api_record
            title: 中国历代人物传记资料库：王奎（CBDB 22244）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22244&o=json
            external_identifier: CBDB:22244
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.861Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kiqfR3ebLRfZwsFStCJHnu
        status: active
        display_name: 王奎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王雋卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王雋卿，宋人物。中国历代人物传记资料库（CBDB）以人物编号 22243 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王雋卿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_znCpHkj9Wovs2kmQ9yEwwD | 王煥之 | accepted |
| children | p_kiqfR3ebLRfZwsFStCJHnu | 王奎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王煥之（CBDB 22242）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22242&o=json)
- [中国历代人物传记资料库：王雋卿（CBDB 22243）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22243&o=json)
- [中国历代人物传记资料库：王奎（CBDB 22244）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22244&o=json)
