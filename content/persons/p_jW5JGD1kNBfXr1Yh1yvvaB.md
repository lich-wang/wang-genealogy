---
schema: wang-person/v1
id: p_jW5JGD1kNBfXr1Yh1yvvaB
status: active
merged_into: null
display_name: 王秀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D8cxecN9yH5CoMUCE5WYfN
        subject_person_id: p_jW5JGD1kNBfXr1Yh1yvvaB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tZ3YWPApbj94RwKwgG5hhX
          claim_id: c_D8cxecN9yH5CoMUCE5WYfN
          source_id: s_2NU2a52YQ5jCvndXsxDhpY
          stance: supports
          locator: CBDB:309757
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309757）
          source: &a1
            id: s_2NU2a52YQ5jCvndXsxDhpY
            source_type: api_record
            title: 中国历代人物传记资料库：王秀（CBDB 309757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309757&o=json
            external_identifier: CBDB:309757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.829Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pKWQUChLduHbYg7B3o7rxe
        subject_person_id: p_jW5JGD1kNBfXr1Yh1yvvaB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秀，明人物。嘉靖二十六年進士，曾任壽官。（中国历代人物传记资料库 CBDB 309757）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7aVf5nPI4-2RhifvarDoBV
          claim_id: c_pKWQUChLduHbYg7B3o7rxe
          source_id: s_2NU2a52YQ5jCvndXsxDhpY
          stance: supports
          locator: CBDB:309757
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
  ancestors: []
  descendants:
    - claim:
        id: c_e9aoJ-djVwKoRx8CfN_Pmt
        subject_person_id: p_jW5JGD1kNBfXr1Yh1yvvaB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CLVogrJsobqnPvkSGHQ8V4
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_anHp_sfzsSBHp65W4JvacO
          claim_id: c_e9aoJ-djVwKoRx8CfN_Pmt
          source_id: s_BPFKQVE7voYxhrah4SdQpz
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第二十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BPFKQVE7voYxhrah4SdQpz
            source_type: api_record
            title: 中国历代人物传记资料库：王尚禮（CBDB 203768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203768&o=json
            external_identifier: CBDB:203768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.799Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CLVogrJsobqnPvkSGHQ8V4
        status: active
        display_name: 王尚禮
        merged_into_person_id: null
  other: []
---

# 王秀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秀 | accepted |
| bio.summary | 王秀，明人物。嘉靖二十六年進士，曾任壽官。（中国历代人物传记资料库 CBDB 309757） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_CLVogrJsobqnPvkSGHQ8V4 | 王尚禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王尚禮（CBDB 203768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203768&o=json)
- [中国历代人物传记资料库：王秀（CBDB 309757）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309757&o=json)
