---
schema: wang-person/v1
id: p_7XvdYNGwLHctu4cLzYQ7kr
status: active
merged_into: null
display_name: 王冕
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YQ9d28rtBCN9b2Pg3QJEzC
        subject_person_id: p_7XvdYNGwLHctu4cLzYQ7kr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8ZNLJhHHP1wFQvrG8tjpdC
          claim_id: c_YQ9d28rtBCN9b2Pg3QJEzC
          source_id: s_wFAosYYDj6D1VR7Gxa42bv
          stance: supports
          locator: CBDB:198620
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198620）
          source: &a1
            id: s_wFAosYYDj6D1VR7Gxa42bv
            source_type: api_record
            title: 中国历代人物传记资料库：王冕（CBDB 198620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198620&o=json
            external_identifier: CBDB:198620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.504Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vPX9EpPYYamnHDN8UsiFcW
        subject_person_id: p_7XvdYNGwLHctu4cLzYQ7kr
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1426年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z2ip5fn2F8SWPkfKqJPFrG
          claim_id: c_vPX9EpPYYamnHDN8UsiFcW
          source_id: s_wFAosYYDj6D1VR7Gxa42bv
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
        id: c_3ZvH76155RoPmgzAh8kPBH
        subject_person_id: p_7XvdYNGwLHctu4cLzYQ7kr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冕（生于1426年），明人物。明清進士進士，籍贯薊州，入仕進士。（中国历代人物传记资料库 CBDB 198620）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nZrqQsD7WdCf2RdNIwnsbg
          claim_id: c_3ZvH76155RoPmgzAh8kPBH
          source_id: s_wFAosYYDj6D1VR7Gxa42bv
          stance: supports
          locator: CBDB:198620
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TpB8SUNZ6oh7EuZlS3WF7o
        subject_person_id: p_kXrauqiRDQXXD79d2V6tEj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7XvdYNGwLHctu4cLzYQ7kr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0nDph48VADhDzLH5ObTGGK
          claim_id: c_TpB8SUNZ6oh7EuZlS3WF7o
          source_id: s_wFAosYYDj6D1VR7Gxa42bv
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第四十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kXrauqiRDQXXD79d2V6tEj
        status: active
        display_name: 王觀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_hgRePJBD6JSpxRJ9JxGTI2
        subject_person_id: p_7XvdYNGwLHctu4cLzYQ7kr
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_5KwG1755D5bESfCQsazhc9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jpmr_ksd5WBrWnj4QG0iC_
          claim_id: c_hgRePJBD6JSpxRJ9JxGTI2
          source_id: s_HUeDuqYkJBocWIaWdX-8E9
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第四十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HUeDuqYkJBocWIaWdX-8E9
            source_type: api_record
            title: 中国历代人物传记资料库：汪氏(王冕妻)（CBDB 295295）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295295&o=json
            external_identifier: CBDB:295295
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5KwG1755D5bESfCQsazhc9
        status: active
        display_name: 汪氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c__eYIwNGW24Z6OsUnXqby2N
        subject_person_id: p_VsHER7rTMHVjNkm5jP4JHH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7XvdYNGwLHctu4cLzYQ7kr
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NJXpWUii4wf9JUN1ih3IvA
          claim_id: c__eYIwNGW24Z6OsUnXqby2N
          source_id: s_wFAosYYDj6D1VR7Gxa42bv
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第四十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VsHER7rTMHVjNkm5jP4JHH
        status: active
        display_name: 王服義
        merged_into_person_id: null
    - claim:
        id: c_xFg1w6CYrU0IZDN-VeqxHb
        subject_person_id: p_MCBLRdp5Dr3WhuKd5gEr5C
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7XvdYNGwLHctu4cLzYQ7kr
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5qq72mXBCEbw__DVlj7ZTt
          claim_id: c_xFg1w6CYrU0IZDN-VeqxHb
          source_id: s_wFAosYYDj6D1VR7Gxa42bv
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第四十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MCBLRdp5Dr3WhuKd5gEr5C
        status: active
        display_name: 王誠
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王冕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王冕 | accepted |
| birth.date | 1426年 | accepted |
| bio.summary | 王冕（生于1426年），明人物。明清進士進士，籍贯薊州，入仕進士。（中国历代人物传记资料库 CBDB 198620） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kXrauqiRDQXXD79d2V6tEj | 王觀 | accepted |
| spouses | p_5KwG1755D5bESfCQsazhc9 | 汪氏 | accepted |
| ancestors | p_VsHER7rTMHVjNkm5jP4JHH | 王服義 | accepted |
| ancestors | p_MCBLRdp5Dr3WhuKd5gEr5C | 王誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：汪氏(王冕妻)（CBDB 295295）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295295&o=json)
- [中国历代人物传记资料库：王冕（CBDB 198620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198620&o=json)
