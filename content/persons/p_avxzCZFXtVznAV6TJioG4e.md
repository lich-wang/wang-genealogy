---
schema: wang-person/v1
id: p_avxzCZFXtVznAV6TJioG4e
status: active
merged_into: null
display_name: 王珮珩
cbdb_id: 121083
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4sKgmcgPfcV3DmMp9HKGTa
        subject_person_id: p_avxzCZFXtVznAV6TJioG4e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珮珩，清人物。中国历代人物传记资料库（CBDB）以人物编号 121083 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_9hhY3zhECsKYmm_8MMysRn
          claim_id: c_4sKgmcgPfcV3DmMp9HKGTa
          source_id: s_nMEo3A3KBCzArbcsQCBcK5
          stance: supports
          locator: CBDB:121083
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_nMEo3A3KBCzArbcsQCBcK5
            source_type: api_record
            title: 中国历代人物传记资料库：王珮珩（CBDB 121083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121083&o=json
            external_identifier: CBDB:121083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_k6Ybe2cdvXNJKBfBo1bBLd
        subject_person_id: p_avxzCZFXtVznAV6TJioG4e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珮珩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7RYC6QxZK7ekZb5KtR1DAb
          claim_id: c_k6Ybe2cdvXNJKBfBo1bBLd
          source_id: s_nMEo3A3KBCzArbcsQCBcK5
          stance: supports
          locator: CBDB:121083
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_nMEo3A3KBCzArbcsQCBcK5
            source_type: api_record
            title: 中国历代人物传记资料库：王珮珩（CBDB 121083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121083&o=json
            external_identifier: CBDB:121083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BwWWy95nx0X0u8BTjtCqsF
        subject_person_id: p_6ioi1JGP9ujG2Ba6LZFo8F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_avxzCZFXtVznAV6TJioG4e
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_inBFLxskgsLsKe6SVxmNH_
          claim_id: c_BwWWy95nx0X0u8BTjtCqsF
          source_id: s_nMEo3A3KBCzArbcsQCBcK5
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4169, HuWenKai #232：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6ioi1JGP9ujG2Ba6LZFo8F
        status: active
        display_name: 王呂廬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王珮珩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王珮珩，清人物。中国历代人物传记资料库（CBDB）以人物编号 121083 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王珮珩 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6ioi1JGP9ujG2Ba6LZFo8F | 王呂廬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珮珩（CBDB 121083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121083&o=json)
