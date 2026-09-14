---
schema: wang-person/v1
id: p_ZC9cZs12t7iJnxdJfx5Hj4
status: active
merged_into: null
display_name: 王思義
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zaBFK33rDnRR7fTW6yk1Ga
        subject_person_id: p_ZC9cZs12t7iJnxdJfx5Hj4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yoKmtpA3bwVmDSRV6CbBpo
          claim_id: c_zaBFK33rDnRR7fTW6yk1Ga
          source_id: s_Z1UAeer9JCApwkCDbSAv77
          stance: supports
          locator: CBDB:295401
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（295401）
          source: &a1
            id: s_Z1UAeer9JCApwkCDbSAv77
            source_type: api_record
            title: 中国历代人物传记资料库：王思義（CBDB 295401）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295401&o=json
            external_identifier: CBDB:295401
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.498Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GqLctBhFh59ypxn6EHtG39
        subject_person_id: p_ZC9cZs12t7iJnxdJfx5Hj4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思義，明人物。嘉靖十四年進士，籍贯深州，曾任義官。（中国历代人物传记资料库 CBDB 295401）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PbIsY22yIJDBUfgt0znD4M
          claim_id: c_GqLctBhFh59ypxn6EHtG39
          source_id: s_Z1UAeer9JCApwkCDbSAv77
          stance: supports
          locator: CBDB:295401
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_NoIqpx-UZbeOVJEq9r2NFJ
        subject_person_id: p_ZC9cZs12t7iJnxdJfx5Hj4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fJbtRZx7s1XqSoTR8tLmBu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jLNqDEV1TXz0X8bnszg4dv
          claim_id: c_NoIqpx-UZbeOVJEq9r2NFJ
          source_id: s_9t6MfGDZdGonHJQxFCm4qT
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第三十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9t6MfGDZdGonHJQxFCm4qT
            source_type: api_record
            title: 中国历代人物传记资料库：王珉（CBDB 202834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202834&o=json
            external_identifier: CBDB:202834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.759Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fJbtRZx7s1XqSoTR8tLmBu
        status: active
        display_name: 王珉
        merged_into_person_id: null
    - claim:
        id: c_e0Vrk9Mv40XV7il47W_fRu
        subject_person_id: p_ZC9cZs12t7iJnxdJfx5Hj4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ABDEi8fuYZK2pj19UDxiqm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ny679p-TcW_CamqWM5MCQC
          claim_id: c_e0Vrk9Mv40XV7il47W_fRu
          source_id: s_ZeJRA4Oyd2phZ1IrxIZ4Qe
          stance: supports
          locator: CBDB：兄弟 王珉（202834）之父／母 王思義
          quotation: null
          interpretation_note: 由兄弟关系推断：王祿 与 王珉 为同胞（CBDB 记「弟」），王珉 之父／母即 王祿 之父／母。
          source:
            id: s_ZeJRA4Oyd2phZ1IrxIZ4Qe
            source_type: api_record
            title: 中国历代人物传记资料库：王祿（CBDB 295405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295405&o=json
            external_identifier: CBDB:295405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ABDEi8fuYZK2pj19UDxiqm
        status: active
        display_name: 王祿
        merged_into_person_id: null
    - claim:
        id: c_ZUzCOMoF7hisWlKCQzXv-T
        subject_person_id: p_ZC9cZs12t7iJnxdJfx5Hj4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XDx4iA4sbdvZ6DN4dam34b
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XS60dtYzY2-DnzKD0FHcP6
          claim_id: c_ZUzCOMoF7hisWlKCQzXv-T
          source_id: s_oMI6-XvA8OZQq4oFkAe5FR
          stance: supports
          locator: CBDB：兄弟 王珉（202834）之父／母 王思義
          quotation: null
          interpretation_note: 由兄弟关系推断：王璞 与 王珉 为同胞（CBDB 记「兄」），王珉 之父／母即 王璞 之父／母。
          source:
            id: s_oMI6-XvA8OZQq4oFkAe5FR
            source_type: api_record
            title: 中国历代人物传记资料库：王璞（CBDB 295406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295406&o=json
            external_identifier: CBDB:295406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XDx4iA4sbdvZ6DN4dam34b
        status: active
        display_name: 王璞
        merged_into_person_id: null
    - claim:
        id: c_FGhFfzh4LgvVbkaLDRvkDo
        subject_person_id: p_ZC9cZs12t7iJnxdJfx5Hj4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_f3R8HLraqnB1DXqUXJNkJ5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E7p4sgkN1mttSGH968nD1-
          claim_id: c_FGhFfzh4LgvVbkaLDRvkDo
          source_id: s_mdyr2YqmDyXoAGKXP19paL
          stance: supports
          locator: CBDB：兄弟 王珉（202834）之父／母 王思義
          quotation: null
          interpretation_note: 由兄弟关系推断：王爵 与 王珉 为同胞（CBDB 记「弟」），王珉 之父／母即 王爵 之父／母。
          source:
            id: s_mdyr2YqmDyXoAGKXP19paL
            source_type: api_record
            title: 中国历代人物传记资料库：王爵（CBDB 295404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295404&o=json
            external_identifier: CBDB:295404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_f3R8HLraqnB1DXqUXJNkJ5
        status: active
        display_name: 王爵
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王思義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思義 | accepted |
| bio.summary | 王思義，明人物。嘉靖十四年進士，籍贯深州，曾任義官。（中国历代人物传记资料库 CBDB 295401） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_fJbtRZx7s1XqSoTR8tLmBu | 王珉 | accepted |
| children | p_ABDEi8fuYZK2pj19UDxiqm | 王祿 | accepted |
| children | p_XDx4iA4sbdvZ6DN4dam34b | 王璞 | accepted |
| children | p_f3R8HLraqnB1DXqUXJNkJ5 | 王爵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王爵（CBDB 295404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295404&o=json)
- [中国历代人物传记资料库：王祿（CBDB 295405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295405&o=json)
- [中国历代人物传记资料库：王珉（CBDB 202834）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202834&o=json)
- [中国历代人物传记资料库：王璞（CBDB 295406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295406&o=json)
- [中国历代人物传记资料库：王思義（CBDB 295401）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295401&o=json)
