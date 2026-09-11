---
schema: wang-person/v1
id: p_WgAzpAW51TbQP1qCXJ8881
status: active
merged_into: null
display_name: 王守競
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eAZBEtYHADJQzFFDSzfqtG
        subject_person_id: p_WgAzpAW51TbQP1qCXJ8881
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守競
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AsiAsTMmjP6PSdweYiSeM1
          claim_id: c_eAZBEtYHADJQzFFDSzfqtG
          source_id: s_zMPMHr1WDYN5TKdD67Eo7D
          stance: supports
          locator: CBDB:526908
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526908）
          source: &a1
            id: s_zMPMHr1WDYN5TKdD67Eo7D
            source_type: api_record
            title: 中国历代人物传记资料库：王守競（CBDB 526908）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526908&o=json
            external_identifier: CBDB:526908
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.341Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QQJ4oJD2cQNLS1DwLt5NfW
        subject_person_id: p_WgAzpAW51TbQP1qCXJ8881
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M6dSw8QQBEZu3s44FjHvGw
          claim_id: c_QQJ4oJD2cQNLS1DwLt5NfW
          source_id: s_zMPMHr1WDYN5TKdD67Eo7D
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
        id: c_cLUEeKj-aO6GLB4w0-cyyn
        subject_person_id: p_C76WEam8DrJz85GjQuBEXF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WgAzpAW51TbQP1qCXJ8881
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ui6JZIGsEHXMz50hoXzjna
          claim_id: c_cLUEeKj-aO6GLB4w0-cyyn
          source_id: s_g2v8cqJ5RPSCgN3VLzp6tD
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13086：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_g2v8cqJ5RPSCgN3VLzp6tD
            source_type: api_record
            title: 中国历代人物传记资料库：王頌蔚（CBDB 69381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69381&o=json
            external_identifier: CBDB:69381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.236Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C76WEam8DrJz85GjQuBEXF
        status: active
        display_name: 王頌蔚
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王守競

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守競 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_C76WEam8DrJz85GjQuBEXF | 王頌蔚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守競（CBDB 526908）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526908&o=json)
- [中国历代人物传记资料库：王頌蔚（CBDB 69381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69381&o=json)
