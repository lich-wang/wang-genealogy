---
schema: wang-person/v1
id: p_MkrPbfTpQxhFZEy4TWiC1Q
status: active
merged_into: null
display_name: 王居巖
cbdb_id: 3946
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1qpRTgApcYYPxV69PaJwHt
        subject_person_id: p_MkrPbfTpQxhFZEy4TWiC1Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居巖，唐人物。中国历代人物传记资料库（CBDB）以人物编号 3946 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_tkNFqD8wNrHytzodglGCue
          claim_id: c_1qpRTgApcYYPxV69PaJwHt
          source_id: s_vVpRsufP89D6R1Wrh5oWzH
          stance: supports
          locator: CBDB:3946
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_vVpRsufP89D6R1Wrh5oWzH
            source_type: api_record
            title: 中国历代人物传记资料库：王居巖（CBDB 3946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3946&o=json
            external_identifier: CBDB:3946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_95eDSJ8H2SiAhrMzPbG5ia
        subject_person_id: p_MkrPbfTpQxhFZEy4TWiC1Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居巖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BJ1kiaaLhPM7Kg57FXyQ5t
          claim_id: c_95eDSJ8H2SiAhrMzPbG5ia
          source_id: s_vVpRsufP89D6R1Wrh5oWzH
          stance: supports
          locator: CBDB:3946
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_vVpRsufP89D6R1Wrh5oWzH
            source_type: api_record
            title: 中国历代人物传记资料库：王居巖（CBDB 3946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3946&o=json
            external_identifier: CBDB:3946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_wiijnLmAaA9E89xJj_5Bzu
        subject_person_id: p_MkrPbfTpQxhFZEy4TWiC1Q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B8ga7F2MNvRvYqoPDeiZMF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_emyTHdYcg-26c9TebEnbzt
          claim_id: c_wiijnLmAaA9E89xJj_5Bzu
          source_id: s_Lq2TRJGL6oVAj4QXBdB8KP
          stance: supports
          locator: CBDB 双向互证（父 王居巖 ⇄ 子 王延嗣）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Lq2TRJGL6oVAj4QXBdB8KP
            source_type: api_record
            title: 中国历代人物传记资料库：王延嗣（CBDB 22011）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22011&o=json
            external_identifier: CBDB:22011
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.795Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_B8ga7F2MNvRvYqoPDeiZMF
        status: active
        display_name: 王延嗣
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_jMittQoLqBN5ASoQslilDr
        subject_person_id: p_MkrPbfTpQxhFZEy4TWiC1Q
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_r5tsAWpfP2w1Ew681Ex2C6
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uiq_Hb7OkaVzTLQasZwK5l
          claim_id: c_jMittQoLqBN5ASoQslilDr
          source_id: s_osTvFgrVAZCGYaRJphjcL6
          stance: supports
          locator: 宋史：高祖;四世祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_osTvFgrVAZCGYaRJphjcL6
            source_type: api_record
            title: 中国历代人物传记资料库：王逢（CBDB 7374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7374&o=json
            external_identifier: CBDB:7374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.475Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_r5tsAWpfP2w1Ew681Ex2C6
        status: active
        display_name: 王逢
        merged_into_person_id: null
  other: []
---

# 王居巖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王居巖，唐人物。中国历代人物传记资料库（CBDB）以人物编号 3946 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王居巖 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_B8ga7F2MNvRvYqoPDeiZMF | 王延嗣 | accepted |
| descendants | p_r5tsAWpfP2w1Ew681Ex2C6 | 王逢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王逢（CBDB 7374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7374&o=json)
- [中国历代人物传记资料库：王居巖（CBDB 3946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3946&o=json)
- [中国历代人物传记资料库：王延嗣（CBDB 22011）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22011&o=json)
