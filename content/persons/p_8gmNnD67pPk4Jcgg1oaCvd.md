---
schema: wang-person/v1
id: p_8gmNnD67pPk4Jcgg1oaCvd
status: active
merged_into: null
display_name: 王邑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fSteQhMSoMqKAeBe9ZAeAv
        subject_person_id: p_8gmNnD67pPk4Jcgg1oaCvd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2BKKsjC3AJApBGC92eS62w
          claim_id: c_fSteQhMSoMqKAeBe9ZAeAv
          source_id: s_ruU7HRY239s3HmDCn8SH4K
          stance: supports
          locator: CBDB:287958
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287958）
          source: &a1
            id: s_ruU7HRY239s3HmDCn8SH4K
            source_type: api_record
            title: 中国历代人物传记资料库：王邑（CBDB 287958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287958&o=json
            external_identifier: CBDB:287958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.277Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B71jiTNnDKRNJ3pQhQtLFw
        subject_person_id: p_8gmNnD67pPk4Jcgg1oaCvd
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
        - id: cs_K9QmjtF1x6hbeeQkpsaNiy
          claim_id: c_B71jiTNnDKRNJ3pQhQtLFw
          source_id: s_ruU7HRY239s3HmDCn8SH4K
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
  ancestors: []
  descendants:
    - claim:
        id: c_aqu0U1nTGaWk3KOLlFnHBL
        subject_person_id: p_8gmNnD67pPk4Jcgg1oaCvd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_91mfo9pBnGu6yNqPS5SH4s
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7tMf1GNZHItnvd0Q7DEiLI
          claim_id: c_aqu0U1nTGaWk3KOLlFnHBL
          source_id: s_ruU7HRY239s3HmDCn8SH4K
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第六十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_91mfo9pBnGu6yNqPS5SH4s
        status: active
        display_name: 王養正
        merged_into_person_id: null
    - claim:
        id: c_IXct2LnYhuwXAyvXG7OgIk
        subject_person_id: p_8gmNnD67pPk4Jcgg1oaCvd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JFCMn29RFWw99L547unXBG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k9COvrgPKT4MzLW-cPrvwg
          claim_id: c_IXct2LnYhuwXAyvXG7OgIk
          source_id: s_ruU7HRY239s3HmDCn8SH4K
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JFCMn29RFWw99L547unXBG
        status: active
        display_name: 王養浩
        merged_into_person_id: null
  other: []
---

# 王邑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邑 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_91mfo9pBnGu6yNqPS5SH4s | 王養正 | accepted |
| descendants | p_JFCMn29RFWw99L547unXBG | 王養浩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王邑（CBDB 287958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287958&o=json)
