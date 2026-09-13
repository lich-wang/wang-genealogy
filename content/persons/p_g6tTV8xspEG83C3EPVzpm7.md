---
schema: wang-person/v1
id: p_g6tTV8xspEG83C3EPVzpm7
status: active
merged_into: null
display_name: 王乾溥
cbdb_id: 261841
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U3ux6d2RpRYADa7VF9aD7Y
        subject_person_id: p_g6tTV8xspEG83C3EPVzpm7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乾溥，明人物。弘治三年進士，籍贯安福。（中国历代人物传记资料库 CBDB 261841）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ssU4FlId2nh-nKfylmnoxu
          claim_id: c_U3ux6d2RpRYADa7VF9aD7Y
          source_id: s_LAp2qEoFjsQzovLPCkWAeP
          stance: supports
          locator: CBDB:261841
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LAp2qEoFjsQzovLPCkWAeP
            source_type: api_record
            title: 中国历代人物传记资料库：王乾溥（CBDB 261841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261841&o=json
            external_identifier: CBDB:261841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_b1jZTR4r36rM5RFkLe943J
        subject_person_id: p_g6tTV8xspEG83C3EPVzpm7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乾溥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aEeki98GWofuYjHyXofATu
          claim_id: c_b1jZTR4r36rM5RFkLe943J
          source_id: s_LAp2qEoFjsQzovLPCkWAeP
          stance: supports
          locator: CBDB:261841
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_tB8SdzE3E62myebAkc8SnB
        subject_person_id: p_g6tTV8xspEG83C3EPVzpm7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JhT8MPbcy6fqyD8xKqm8c7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VBJEyccXq232SQXp_4aKiX
          claim_id: c_tB8SdzE3E62myebAkc8SnB
          source_id: s_LAp2qEoFjsQzovLPCkWAeP
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LAp2qEoFjsQzovLPCkWAeP
            source_type: api_record
            title: 中国历代人物传记资料库：王乾溥（CBDB 261841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261841&o=json
            external_identifier: CBDB:261841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_JhT8MPbcy6fqyD8xKqm8c7
        status: active
        display_name: 王奎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王乾溥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王乾溥，明人物。弘治三年進士，籍贯安福。（中国历代人物传记资料库 CBDB 261841） | accepted |
| name.primary | 王乾溥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_JhT8MPbcy6fqyD8xKqm8c7 | 王奎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王乾溥（CBDB 261841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261841&o=json)
