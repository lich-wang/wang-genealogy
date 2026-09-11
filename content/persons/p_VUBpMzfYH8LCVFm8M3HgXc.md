---
schema: wang-person/v1
id: p_VUBpMzfYH8LCVFm8M3HgXc
status: active
merged_into: null
display_name: 王佐
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y7MsBzD9wDJs61pXv987kR
        subject_person_id: p_VUBpMzfYH8LCVFm8M3HgXc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_s6gLp6miPCnZLJwovyPKNY
          claim_id: c_y7MsBzD9wDJs61pXv987kR
          source_id: s_dTUXRMkxqmhmdy9hU3p8N8
          stance: supports
          locator: CBDB:199633
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199633）
          source: &a1
            id: s_dTUXRMkxqmhmdy9hU3p8N8
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 199633）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199633&o=json
            external_identifier: CBDB:199633
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.564Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2FmeAt6A7DyCmB458csW1i
        subject_person_id: p_VUBpMzfYH8LCVFm8M3HgXc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1435年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_etocQxd8NmwPwUDV4MU1ic
          claim_id: c_2FmeAt6A7DyCmB458csW1i
          source_id: s_dTUXRMkxqmhmdy9hU3p8N8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kJHvHHVV7Y7paWNbQcafSA
        subject_person_id: p_VUBpMzfYH8LCVFm8M3HgXc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐（生于1435年），明人物。成化八年進士，籍贯開州，入仕進士。（中国历代人物传记资料库 CBDB 199633）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_--O3AtsE7XTWCa_WezeTuV
          claim_id: c_kJHvHHVV7Y7paWNbQcafSA
          source_id: s_dTUXRMkxqmhmdy9hU3p8N8
          stance: supports
          locator: CBDB:199633
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VpdRyHQBFWkkb5A0IeK4HA
        subject_person_id: p_KMDmm7VcULsohRE8yPb75U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VUBpMzfYH8LCVFm8M3HgXc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_unANY-qNzAM8C78MNYuYbh
          claim_id: c_VpdRyHQBFWkkb5A0IeK4HA
          source_id: s_dTUXRMkxqmhmdy9hU3p8N8
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百六十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KMDmm7VcULsohRE8yPb75U
        status: active
        display_name: 王宗美
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_tkap6j4lylP77vXfiu4Un4
        subject_person_id: p_VUBpMzfYH8LCVFm8M3HgXc
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_b8pc9tH9za15jLqv5PtN2L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aORqv_D4lWYPqY6vSGh_SK
          claim_id: c_tkap6j4lylP77vXfiu4Un4
          source_id: s_6wBUr9SpqamMXRopTByYIW
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百六十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6wBUr9SpqamMXRopTByYIW
            source_type: api_record
            title: 中国历代人物传记资料库：封氏(王佐妻)（CBDB 247522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247522&o=json
            external_identifier: CBDB:247522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_b8pc9tH9za15jLqv5PtN2L
        status: active
        display_name: 封氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_78M5Q6hY2FFjYm1XZKhnkw
        subject_person_id: p_1J7egcC3evZEopQVEJdQq8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VUBpMzfYH8LCVFm8M3HgXc
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IJ0rbiGkdBmsMp4B3u0iIf
          claim_id: c_78M5Q6hY2FFjYm1XZKhnkw
          source_id: s_dTUXRMkxqmhmdy9hU3p8N8
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百六十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1J7egcC3evZEopQVEJdQq8
        status: active
        display_name: 王時能
        merged_into_person_id: null
    - claim:
        id: c_oSIwmw3wW8IwoyIioV6lm2
        subject_person_id: p_N2gb5pMqtzse3xWR5G5kGz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VUBpMzfYH8LCVFm8M3HgXc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TFyCKT3lS7bEjtOw9CYCki
          claim_id: c_oSIwmw3wW8IwoyIioV6lm2
          source_id: s_dTUXRMkxqmhmdy9hU3p8N8
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百六十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_N2gb5pMqtzse3xWR5G5kGz
        status: active
        display_name: 王希名
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| birth.date | 1435年 | accepted |
| bio.summary | 王佐（生于1435年），明人物。成化八年進士，籍贯開州，入仕進士。（中国历代人物传记资料库 CBDB 199633） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KMDmm7VcULsohRE8yPb75U | 王宗美 | accepted |
| spouses | p_b8pc9tH9za15jLqv5PtN2L | 封氏 | accepted |
| ancestors | p_1J7egcC3evZEopQVEJdQq8 | 王時能 | accepted |
| ancestors | p_N2gb5pMqtzse3xWR5G5kGz | 王希名 | accepted |

## 外部来源

- [中国历代人物传记资料库：封氏(王佐妻)（CBDB 247522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247522&o=json)
- [中国历代人物传记资料库：王佐（CBDB 199633）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199633&o=json)
