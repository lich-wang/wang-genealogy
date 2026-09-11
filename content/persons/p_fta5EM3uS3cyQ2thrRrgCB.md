---
schema: wang-person/v1
id: p_fta5EM3uS3cyQ2thrRrgCB
status: active
merged_into: null
display_name: 王省
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fKTj2aoa5MiAC1WBwqJaYt
        subject_person_id: p_fta5EM3uS3cyQ2thrRrgCB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王省
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KmuahDjeLnG1pLGG6i52KN
          claim_id: c_fKTj2aoa5MiAC1WBwqJaYt
          source_id: s_NaWrvScCa2X99MQmjZefPd
          stance: supports
          locator: CBDB:66612
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（66612）
          source: &a1
            id: s_NaWrvScCa2X99MQmjZefPd
            source_type: api_record
            title: 中国历代人物传记资料库：王省（CBDB 66612）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66612&o=json
            external_identifier: CBDB:66612
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.958Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_mFxcv5gmyQf7HayKU9wqUt
        subject_person_id: p_fta5EM3uS3cyQ2thrRrgCB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1402年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qHsSZgjfsB5pgaHwgvEGQ6
          claim_id: c_mFxcv5gmyQf7HayKU9wqUt
          source_id: s_NaWrvScCa2X99MQmjZefPd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pvVPb8APT985NK4aCuzMNC
        subject_person_id: p_fta5EM3uS3cyQ2thrRrgCB
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
        - id: cs_TY5SRsDd4gtRNsgVJhtyD3
          claim_id: c_pvVPb8APT985NK4aCuzMNC
          source_id: s_NaWrvScCa2X99MQmjZefPd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ad4rw7S-RWtzjtPwVst1Vd
        subject_person_id: p_fta5EM3uS3cyQ2thrRrgCB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1YEsp8usN8hvu7JJXfgp6L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7WIZ64DWgHDBfBS5dQubkf
          claim_id: c_ad4rw7S-RWtzjtPwVst1Vd
          source_id: s_NZ5Akywg5CsdKiDqtFB2HZ
          stance: supports
          locator: 江西通志，Igid=1197537：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NZ5Akywg5CsdKiDqtFB2HZ
            source_type: api_record
            title: 中国历代人物传记资料库：王靜（CBDB 556104）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556104&o=json
            external_identifier: CBDB:556104
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.648Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1YEsp8usN8hvu7JJXfgp6L
        status: active
        display_name: 王靜
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王省

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王省 | accepted |
| death.date | 1402年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_1YEsp8usN8hvu7JJXfgp6L | 王靜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王靜（CBDB 556104）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556104&o=json)
- [中国历代人物传记资料库：王省（CBDB 66612）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66612&o=json)
