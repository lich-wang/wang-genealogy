---
schema: wang-person/v1
id: p_cRWVpREuvy3B9SFvdgfPPx
status: active
merged_into: null
display_name: 王世欽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uZXcT5WpgD2gyWWeSesLSp
        subject_person_id: p_cRWVpREuvy3B9SFvdgfPPx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世欽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rNKUF1o7Qj4PuPzf2KMUFT
          claim_id: c_uZXcT5WpgD2gyWWeSesLSp
          source_id: s_ZLBaEhExCkiGgo15U7A7Tt
          stance: supports
          locator: CBDB:531134
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（531134）
          source: &a1
            id: s_ZLBaEhExCkiGgo15U7A7Tt
            source_type: api_record
            title: 中国历代人物传记资料库：王世欽（CBDB 531134）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531134&o=json
            external_identifier: CBDB:531134
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.354Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UH5f2k9YG2eawJ1o3QnHMQ
        subject_person_id: p_cRWVpREuvy3B9SFvdgfPPx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世欽，史料所见人物。本项目依据《中国历代人物传记资料库：王世欽（CBDB 531134）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a5lp3NB05X97T5NYgCBXZs
          claim_id: c_UH5f2k9YG2eawJ1o3QnHMQ
          source_id: s_ZLBaEhExCkiGgo15U7A7Tt
          stance: supports
          locator: CBDB:531134
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5S2f-lGsard_Adh9YbG_wq
        subject_person_id: p_AgKmu3if3fzH6xxsK1rH6a
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cRWVpREuvy3B9SFvdgfPPx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jyOfZ4Qf9qFZALv7Q4_Hyh
          claim_id: c_5S2f-lGsard_Adh9YbG_wq
          source_id: s_YTSva9txjCwUpSQWa23PfC
          stance: supports
          locator: 榆林府志，lgid=1046726：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YTSva9txjCwUpSQWa23PfC
            source_type: api_record
            title: 中国历代人物传记资料库：王威（CBDB 531133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531133&o=json
            external_identifier: CBDB:531133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.354Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AgKmu3if3fzH6xxsK1rH6a
        status: active
        display_name: 王威
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世欽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世欽 | accepted |
| bio.summary | 王世欽，史料所见人物。本项目依据《中国历代人物传记资料库：王世欽（CBDB 531134）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AgKmu3if3fzH6xxsK1rH6a | 王威 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世欽（CBDB 531134）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531134&o=json)
- [中国历代人物传记资料库：王威（CBDB 531133）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531133&o=json)
