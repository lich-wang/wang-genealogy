---
schema: wang-person/v1
id: p_MiT45BEZABeDdxC6DUoAF7
status: active
merged_into: null
display_name: 王㒜
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hBt21LYdKzZYPZ3Vg5oUJ6
        subject_person_id: p_MiT45BEZABeDdxC6DUoAF7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王㒜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b1dk2PAQaGrdZrNoe74xz7
          claim_id: c_hBt21LYdKzZYPZ3Vg5oUJ6
          source_id: s_J1u68EVEk9xSd6Ey8UHr4e
          stance: supports
          locator: CBDB:126815
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126815）
          source: &a1
            id: s_J1u68EVEk9xSd6Ey8UHr4e
            source_type: api_record
            title: 中国历代人物传记资料库：王㒜（CBDB 126815）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126815&o=json
            external_identifier: CBDB:126815
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.226Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_11tuBaBu9S4gDr6687jp3h
        subject_person_id: p_MiT45BEZABeDdxC6DUoAF7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1424年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LM8LQ9m5hY1EJRfJMsQqYy
          claim_id: c_11tuBaBu9S4gDr6687jp3h
          source_id: s_J1u68EVEk9xSd6Ey8UHr4e
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
        id: c_3VeQ9JEpAGq81S8U2jB6qL
        subject_person_id: p_MiT45BEZABeDdxC6DUoAF7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1495年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bQ54rA3XnRELgPa9StGCn9
          claim_id: c_3VeQ9JEpAGq81S8U2jB6qL
          source_id: s_J1u68EVEk9xSd6Ey8UHr4e
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
        id: c_c6eP5jUw458yh7pjvNo18b
        subject_person_id: p_MiT45BEZABeDdxC6DUoAF7
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
        - id: cs_nN1f2SH8rRAtrvV7zYEZF8
          claim_id: c_c6eP5jUw458yh7pjvNo18b
          source_id: s_J1u68EVEk9xSd6Ey8UHr4e
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
        id: c__DVcSrWOjQ9GeGBuk2gv09
        subject_person_id: p_4PC2JzRydaXykTknqoVMo5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MiT45BEZABeDdxC6DUoAF7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zz1uuTGr4ZfydGU_PcJviT
          claim_id: c__DVcSrWOjQ9GeGBuk2gv09
          source_id: s_2e42p38nJLkAsMYS2UdA8i
          stance: supports
          locator: 江南通志，lgid=65779：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2e42p38nJLkAsMYS2UdA8i
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 126573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126573&o=json
            external_identifier: CBDB:126573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.033Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4PC2JzRydaXykTknqoVMo5
        status: active
        display_name: 王忠
        merged_into_person_id: null
  children:
    - claim:
        id: c_Lv_Mh59dmxxhIbyMxQ0HII
        subject_person_id: p_MiT45BEZABeDdxC6DUoAF7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AUAav2wMYc11o1wGoqCa9M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SCmbhAnbS2CXPr1v-qHhQL
          claim_id: c_Lv_Mh59dmxxhIbyMxQ0HII
          source_id: s_7sKxut838DNA7k1qTDbBK1
          stance: supports
          locator: 江南通志，lgid=65779：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7sKxut838DNA7k1qTDbBK1
            source_type: api_record
            title: 中国历代人物传记资料库：王沂（CBDB 126526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126526&o=json
            external_identifier: CBDB:126526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.999Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AUAav2wMYc11o1wGoqCa9M
        status: active
        display_name: 王沂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_L3jO5p1829JUqrK-5su2-w
        subject_person_id: p_K5rehYthr86ezK2PwWtEVK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MiT45BEZABeDdxC6DUoAF7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KXJsiLtflpMnMVPitMiiMx
          claim_id: c_L3jO5p1829JUqrK-5su2-w
          source_id: s_PrDhgdLUgyCMPTre2MNTjU
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第一甲第三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PrDhgdLUgyCMPTre2MNTjU
            source_type: api_record
            title: 中国历代人物传记资料库：王德甫（CBDB 244629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244629&o=json
            external_identifier: CBDB:244629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.034Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_K5rehYthr86ezK2PwWtEVK
        status: active
        display_name: 王德甫
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王㒜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王㒜 | accepted |
| birth.date | 1424年 | accepted |
| death.date | 1495年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4PC2JzRydaXykTknqoVMo5 | 王忠 | accepted |
| children | p_AUAav2wMYc11o1wGoqCa9M | 王沂 | accepted |
| ancestors | p_K5rehYthr86ezK2PwWtEVK | 王德甫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德甫（CBDB 244629）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244629&o=json)
- [中国历代人物传记资料库：王沂（CBDB 126526）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126526&o=json)
- [中国历代人物传记资料库：王忠（CBDB 126573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126573&o=json)
- [中国历代人物传记资料库：王㒜（CBDB 126815）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126815&o=json)
