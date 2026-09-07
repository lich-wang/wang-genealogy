---
schema: wang-person/v1
id: p_L4EGussSp1S78E2cg4bFb8
status: active
merged_into: null
display_name: 王鼎起
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K1XrNfXqGtkCV8n98bzS3w
        subject_person_id: p_L4EGussSp1S78E2cg4bFb8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎起，清人物。CBDB 记录其籍贯记录为宛平。中国历代人物传记资料库（CBDB）以人物编号 69771 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_8z6sdDzW8q8fRi2CEfNC8C
          claim_id: c_K1XrNfXqGtkCV8n98bzS3w
          source_id: s_p2w83YiUhc75fnLrtBGGZS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_p2w83YiUhc75fnLrtBGGZS
            source_type: api_record
            title: 维基数据：王鼎起（Q45681016）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45681016
            external_identifier: Q45681016
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:14.436Z
            metadata_json: null
        - id: cs_7KjWU8DYXga-J_ZvYTUMOT
          claim_id: c_K1XrNfXqGtkCV8n98bzS3w
          source_id: s_dC4YTcf3cdC39ujaA33xmY
          stance: supports
          locator: CBDB:69771
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_dC4YTcf3cdC39ujaA33xmY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鼎起（69771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69771&o=json
            external_identifier: CBDB:69771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:14.582Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aJ4vAGz5GRqiNNN85WjA3U
        subject_person_id: p_L4EGussSp1S78E2cg4bFb8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎起
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5m9sRrR9Ay39da6KHJnYA5
          claim_id: c_aJ4vAGz5GRqiNNN85WjA3U
          source_id: s_p2w83YiUhc75fnLrtBGGZS
          stance: supports
          locator: Q45681016
          quotation: null
          interpretation_note: null
          source:
            id: s_p2w83YiUhc75fnLrtBGGZS
            source_type: api_record
            title: 维基数据：王鼎起（Q45681016）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45681016
            external_identifier: Q45681016
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:14.436Z
            metadata_json: null
        - id: cs_ZiU8QKbLmaZ7yCVVmzeQH2
          claim_id: c_aJ4vAGz5GRqiNNN85WjA3U
          source_id: s_dC4YTcf3cdC39ujaA33xmY
          stance: supports
          locator: Q45681016
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QESUox9F9AJ6DwfkBKBPYe
        subject_person_id: p_WgJjrR3eV8FZmEbV9t77oX
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_L4EGussSp1S78E2cg4bFb8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1pER7wGo2XWfN29C5Ci7LE
          claim_id: c_QESUox9F9AJ6DwfkBKBPYe
          source_id: s_tSz5UtgEYXRtEWdwBQvTsR
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_tSz5UtgEYXRtEWdwBQvTsR
            source_type: api_record
            title: 维基数据：王思任（Q15938368）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15938368
            external_identifier: Q15938368
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:36.824Z
            metadata_json: null
        - id: cs_G4M4oBq5cZZ8466ynHgL7g
          claim_id: c_QESUox9F9AJ6DwfkBKBPYe
          source_id: s_p2w83YiUhc75fnLrtBGGZS
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_p2w83YiUhc75fnLrtBGGZS
            source_type: api_record
            title: 维基数据：王鼎起（Q45681016）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45681016
            external_identifier: Q45681016
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:14.436Z
            metadata_json: null
        - id: cs_Zgui2wfP3Ao2m7x2232rXB
          claim_id: c_QESUox9F9AJ6DwfkBKBPYe
          source_id: s_Xiup79Q6rjsrG4SdhBjp36
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_Xiup79Q6rjsrG4SdhBjp36
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王思任（71875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71875&o=json
            external_identifier: CBDB:71875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:52.726Z
            metadata_json: null
      object_person:
        id: p_WgJjrR3eV8FZmEbV9t77oX
        status: active
        display_name: 王思任
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鼎起

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鼎起，清人物。CBDB 记录其籍贯记录为宛平。中国历代人物传记资料库（CBDB）以人物编号 69771 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王鼎起 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WgJjrR3eV8FZmEbV9t77oX | 王思任 | accepted |

## 外部来源

- [维基数据：王鼎起（Q45681016）](https://www.wikidata.org/wiki/Q45681016)
- [维基数据：王思任（Q15938368）](https://www.wikidata.org/wiki/Q15938368)
- [CBDB 中国历代人物传记资料库：王鼎起（69771）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69771&o=json)
- [CBDB 中国历代人物传记资料库：王思任（71875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71875&o=json)
