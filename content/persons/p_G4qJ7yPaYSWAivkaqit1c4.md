---
schema: wang-person/v1
id: p_G4qJ7yPaYSWAivkaqit1c4
status: active
merged_into: null
display_name: 王徽
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PGBugAUNY41L4fh76XBQT5
        subject_person_id: p_G4qJ7yPaYSWAivkaqit1c4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_et3T927EM6pPSVE6yr4aaQ
          claim_id: c_PGBugAUNY41L4fh76XBQT5
          source_id: s_AX3P585bEwZ5g8ooDZ5ufL
          stance: supports
          locator: CBDB:18284
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（18284）
          source: &a1
            id: s_AX3P585bEwZ5g8ooDZ5ufL
            source_type: api_record
            title: 中国历代人物传记资料库：王徽（CBDB 18284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18284&o=json
            external_identifier: CBDB:18284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.705Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_xFUgUq1c73WR36XfeYRPwN
        subject_person_id: p_G4qJ7yPaYSWAivkaqit1c4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 946年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G1e7rq7oPTN9SrJekBuKD4
          claim_id: c_xFUgUq1c73WR36XfeYRPwN
          source_id: s_AX3P585bEwZ5g8ooDZ5ufL
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
        id: c_73eMbVGMwSgeC6yeHRaysD
        subject_person_id: p_G4qJ7yPaYSWAivkaqit1c4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徽（卒于946年），後晉人物。籍贯莒縣，身份为義軍首領，入仕世襲(替)。（中国历代人物传记资料库 CBDB 18284）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eKHnEz7xry-zNOmomu7xxG
          claim_id: c_73eMbVGMwSgeC6yeHRaysD
          source_id: s_AX3P585bEwZ5g8ooDZ5ufL
          stance: supports
          locator: CBDB:18284
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UfFrhUzvwC_X35d-_s8E5A
        subject_person_id: p_iSUfErCn12jeYUoQ7FXh2z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G4qJ7yPaYSWAivkaqit1c4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GXRXA9zVXAHM1YtAkhNbB2
          claim_id: c_UfFrhUzvwC_X35d-_s8E5A
          source_id: s_AX3P585bEwZ5g8ooDZ5ufL
          stance: supports
          locator: CBDB 双向互证（父 王甲 ⇄ 子 王徽）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_iSUfErCn12jeYUoQ7FXh2z
        status: active
        display_name: 王甲
        merged_into_person_id: null
  children:
    - claim:
        id: c__3dsN4a33zvIQ-ZCcvE3eO
        subject_person_id: p_G4qJ7yPaYSWAivkaqit1c4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_an7ov6FgpfVGhQMeCjTmjs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9iaGuGvDAmSCZK6vuiOv24
          claim_id: c__3dsN4a33zvIQ-ZCcvE3eO
          source_id: s_PmivFpkMA3kVAkJtL4zax5
          stance: supports
          locator: CBDB 双向互证（父 王徽 ⇄ 子 王璉）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_PmivFpkMA3kVAkJtL4zax5
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 18285）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18285&o=json
            external_identifier: CBDB:18285
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.706Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_an7ov6FgpfVGhQMeCjTmjs
        status: active
        display_name: 王璉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_ZrXpKFfA3BFASych5_Jzmi
        subject_person_id: p_G4qJ7yPaYSWAivkaqit1c4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ncJMsYgNL3hQVCtFzxU5EN
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_abQHxrG12QG05LKiSwhsWM
          claim_id: c_ZrXpKFfA3BFASych5_Jzmi
          source_id: s_AX3P585bEwZ5g8ooDZ5ufL
          stance: supports
          locator: 宋史：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ncJMsYgNL3hQVCtFzxU5EN
        status: active
        display_name: 王子輿
        merged_into_person_id: null
  other: []
---

# 王徽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王徽 | accepted |
| death.date | 946年 | accepted |
| bio.summary | 王徽（卒于946年），後晉人物。籍贯莒縣，身份为義軍首領，入仕世襲(替)。（中国历代人物传记资料库 CBDB 18284） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iSUfErCn12jeYUoQ7FXh2z | 王甲 | accepted |
| children | p_an7ov6FgpfVGhQMeCjTmjs | 王璉 | accepted |
| descendants | p_ncJMsYgNL3hQVCtFzxU5EN | 王子輿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王徽（CBDB 18284）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18284&o=json)
- [中国历代人物传记资料库：王璉（CBDB 18285）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18285&o=json)
