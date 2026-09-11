---
schema: wang-person/v1
id: p_GPJWbNZBxqcAyFkJPjejib
status: active
merged_into: null
display_name: 王鎔
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VjXSK6baxfjBM6G36Ztj54
        subject_person_id: p_GPJWbNZBxqcAyFkJPjejib
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9mWQ7CLRzQHfV1hE4c6dR2
          claim_id: c_VjXSK6baxfjBM6G36Ztj54
          source_id: s_s1WWgNzGTLDo9xbGU15aCa
          stance: supports
          locator: CBDB:201918
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201918）
          source: &a1
            id: s_s1WWgNzGTLDo9xbGU15aCa
            source_type: api_record
            title: 中国历代人物传记资料库：王鎔（CBDB 201918）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201918&o=json
            external_identifier: CBDB:201918
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.700Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_AnPGxvawiLFmBP4LWXP41C
        subject_person_id: p_GPJWbNZBxqcAyFkJPjejib
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1498年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7q66ffsNC5Y6PVPZKYC2wz
          claim_id: c_AnPGxvawiLFmBP4LWXP41C
          source_id: s_s1WWgNzGTLDo9xbGU15aCa
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
        id: c_JTg8VhKAFU6zrFipJkPmrL
        subject_person_id: p_GPJWbNZBxqcAyFkJPjejib
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
        - id: cs_94V6kgd1G5hBQ4Fk3fAQ2F
          claim_id: c_JTg8VhKAFU6zrFipJkPmrL
          source_id: s_s1WWgNzGTLDo9xbGU15aCa
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_p6vuoLx6GpuTLrIBptPMuH
        subject_person_id: p_JQSDqcZBSbRhiYBr5Yzafa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GPJWbNZBxqcAyFkJPjejib
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KmmkNRAc6rQzhOJEuSKlk6
          claim_id: c_p6vuoLx6GpuTLrIBptPMuH
          source_id: s_s1WWgNzGTLDo9xbGU15aCa
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第一百名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JQSDqcZBSbRhiYBr5Yzafa
        status: active
        display_name: 王純
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_aAHAQZqC4myGjspT4EspAB
        subject_person_id: p_GPJWbNZBxqcAyFkJPjejib
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_SBoMUBeLgvrBeJK5Sj2WFL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WuKB8vosC497OH_ogmFzwE
          claim_id: c_aAHAQZqC4myGjspT4EspAB
          source_id: s_e-ANLmc9ryQyu4K6T3PZzM
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第一百名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_e-ANLmc9ryQyu4K6T3PZzM
            source_type: api_record
            title: 中国历代人物传记资料库：姚氏(王鎔妻)（CBDB 280454）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280454&o=json
            external_identifier: CBDB:280454
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_SBoMUBeLgvrBeJK5Sj2WFL
        status: active
        display_name: 姚氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_48Aawf1Zoy8m3867vUHiDX
        subject_person_id: p_nxBo2SnEXoxZTjrPEbFJoT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GPJWbNZBxqcAyFkJPjejib
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5gsy8Sx9n56ksJeDu_THkB
          claim_id: c_48Aawf1Zoy8m3867vUHiDX
          source_id: s_s1WWgNzGTLDo9xbGU15aCa
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第一百名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nxBo2SnEXoxZTjrPEbFJoT
        status: active
        display_name: 王潛
        merged_into_person_id: null
    - claim:
        id: c_nEAxS_HVpYic4nxaNHG5rV
        subject_person_id: p_x3b1ooEbLk2BtuUQYLtrHK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GPJWbNZBxqcAyFkJPjejib
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zdaQpp18jKdWZcvp_n8NN2
          claim_id: c_nEAxS_HVpYic4nxaNHG5rV
          source_id: s_s1WWgNzGTLDo9xbGU15aCa
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第一百名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_x3b1ooEbLk2BtuUQYLtrHK
        status: active
        display_name: 王琯
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王鎔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎔 | accepted |
| birth.date | 1498年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JQSDqcZBSbRhiYBr5Yzafa | 王純 | accepted |
| spouses | p_SBoMUBeLgvrBeJK5Sj2WFL | 姚氏 | accepted |
| ancestors | p_nxBo2SnEXoxZTjrPEbFJoT | 王潛 | accepted |
| ancestors | p_x3b1ooEbLk2BtuUQYLtrHK | 王琯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎔（CBDB 201918）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201918&o=json)
- [中国历代人物传记资料库：姚氏(王鎔妻)（CBDB 280454）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280454&o=json)
