---
schema: wang-person/v1
id: p_j7iPUKCmtFNavh7UEFUMUs
status: active
merged_into: null
display_name: 王正中
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NKXHPuoWAzJsQJeG1rWx57
        subject_person_id: p_j7iPUKCmtFNavh7UEFUMUs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mCo4tn6DhNwzjCzTCHx5Z9
          claim_id: c_NKXHPuoWAzJsQJeG1rWx57
          source_id: s_QQb8J2bNZyaHPZtgdP6fTm
          stance: supports
          locator: CBDB:7078
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（7078）
          source: &a1
            id: s_QQb8J2bNZyaHPZtgdP6fTm
            source_type: api_record
            title: 中国历代人物传记资料库：王正中（CBDB 7078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7078&o=json
            external_identifier: CBDB:7078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.468Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_My6PqoJV2r9WnNabECfQ2j
        subject_person_id: p_j7iPUKCmtFNavh7UEFUMUs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 973年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9463UeSthPLMNk5DMsJgcz
          claim_id: c_My6PqoJV2r9WnNabECfQ2j
          source_id: s_QQb8J2bNZyaHPZtgdP6fTm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_YBXCTT6hXPUzVpT1jU7RA4
        subject_person_id: p_j7iPUKCmtFNavh7UEFUMUs
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1044年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kWyQqe6wZQErcHQaDBnbTP
          claim_id: c_YBXCTT6hXPUzVpT1jU7RA4
          source_id: s_QQb8J2bNZyaHPZtgdP6fTm
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
        id: c_xPVAfDV3Pp7sMnhG84QEby
        subject_person_id: p_j7iPUKCmtFNavh7UEFUMUs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正中（973年—1044年），宋人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 7078）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2Ahx20ABIHSAPKeW1pqda3
          claim_id: c_xPVAfDV3Pp7sMnhG84QEby
          source_id: s_QQb8J2bNZyaHPZtgdP6fTm
          stance: supports
          locator: CBDB:7078
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_NlZgaMMiwOyONzigt-QCXW
        subject_person_id: p_iDKWDJMk6aBELAydymjF7H
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_j7iPUKCmtFNavh7UEFUMUs
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lgvn3VdcC8V463koBbDIi9
          claim_id: c_NlZgaMMiwOyONzigt-QCXW
          source_id: s_tVNJBtDHPngb3641MK8g9R
          stance: supports
          locator: CBDB 双向互证（孫 王正中 ⇄ 祖父 王秉）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_tVNJBtDHPngb3641MK8g9R
            source_type: api_record
            title: 中国历代人物传记资料库：王秉（CBDB 21971）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21971&o=json
            external_identifier: CBDB:21971
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.780Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iDKWDJMk6aBELAydymjF7H
        status: active
        display_name: 王秉
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王正中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正中 | accepted |
| birth.date | 973年 | accepted |
| death.date | 1044年 | accepted |
| bio.summary | 王正中（973年—1044年），宋人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 7078） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_iDKWDJMk6aBELAydymjF7H | 王秉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王秉（CBDB 21971）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21971&o=json)
- [中国历代人物传记资料库：王正中（CBDB 7078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7078&o=json)
