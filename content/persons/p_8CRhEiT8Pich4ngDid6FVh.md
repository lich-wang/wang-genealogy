---
schema: wang-person/v1
id: p_8CRhEiT8Pich4ngDid6FVh
status: active
merged_into: null
display_name: 王仁
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NKYRezH9NaX1Bj73pqqkN4
        subject_person_id: p_8CRhEiT8Pich4ngDid6FVh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9PUB23KLJ4Y6Wmwp74Af2U
          claim_id: c_NKYRezH9NaX1Bj73pqqkN4
          source_id: s_RM7sWFPvHdYjzMjTX1kjd7
          stance: supports
          locator: CBDB:314561
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（314561）
          source: &a1
            id: s_RM7sWFPvHdYjzMjTX1kjd7
            source_type: api_record
            title: 中国历代人物传记资料库：王仁（CBDB 314561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314561&o=json
            external_identifier: CBDB:314561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.934Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7YLowZji361BEFyXFhJNnz
        subject_person_id: p_8CRhEiT8Pich4ngDid6FVh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁，明人物。嘉靖二十九年進士。（中国历代人物传记资料库 CBDB 314561）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iKBBLFml_cZIV43-TWC5j5
          claim_id: c_7YLowZji361BEFyXFhJNnz
          source_id: s_RM7sWFPvHdYjzMjTX1kjd7
          stance: supports
          locator: CBDB:314561
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
        id: c_2cikwp3cmOvzjhIfnI2_c2
        subject_person_id: p_8CRhEiT8Pich4ngDid6FVh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2nye6BM6PDRwcFsFBhjHhi
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RxqVw4q_-E1RPX0EH7N2E9
          claim_id: c_2cikwp3cmOvzjhIfnI2_c2
          source_id: s_RM7sWFPvHdYjzMjTX1kjd7
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百八十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2nye6BM6PDRwcFsFBhjHhi
        status: active
        display_name: 王喬年
        merged_into_person_id: null
  other: []
---

# 王仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁 | accepted |
| bio.summary | 王仁，明人物。嘉靖二十九年進士。（中国历代人物传记资料库 CBDB 314561） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_2nye6BM6PDRwcFsFBhjHhi | 王喬年 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仁（CBDB 314561）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314561&o=json)
