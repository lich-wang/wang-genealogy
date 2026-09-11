---
schema: wang-person/v1
id: p_WrcoN9CL6jsGtB4NtmzaYe
status: active
merged_into: null
display_name: 王良翰
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ab5tHu87ZGJ4tSFbXbTX1B
        subject_person_id: p_WrcoN9CL6jsGtB4NtmzaYe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sTwVDEsRnyhYp7dGMfdudW
          claim_id: c_ab5tHu87ZGJ4tSFbXbTX1B
          source_id: s_P8hfUEKe8Bx9Eq3MLNDadV
          stance: supports
          locator: CBDB:201479
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201479）
          source: &a1
            id: s_P8hfUEKe8Bx9Eq3MLNDadV
            source_type: api_record
            title: 中国历代人物传记资料库：王良翰（CBDB 201479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201479&o=json
            external_identifier: CBDB:201479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.678Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_agF1bB7GUACV4gdj3E164k
        subject_person_id: p_WrcoN9CL6jsGtB4NtmzaYe
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1462年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yVMt71dsfwKvLGXTKuT3fN
          claim_id: c_agF1bB7GUACV4gdj3E164k
          source_id: s_P8hfUEKe8Bx9Eq3MLNDadV
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
        id: c_qthAdG5NMMQiX9HYtRPyfJ
        subject_person_id: p_WrcoN9CL6jsGtB4NtmzaYe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良翰（生于1462年），明人物。明清進士進士，籍贯常熟，入仕進士，曾任訓導。（中国历代人物传记资料库 CBDB 201479）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8i1Dd_rqSBLF8xurJYQJZ9
          claim_id: c_qthAdG5NMMQiX9HYtRPyfJ
          source_id: s_P8hfUEKe8Bx9Eq3MLNDadV
          stance: supports
          locator: CBDB:201479
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HDcdtVJwF0LFp_cv98C8TQ
        subject_person_id: p_sYxtGPb4CL3WrP3V3fvmVA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WrcoN9CL6jsGtB4NtmzaYe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MX4EioQ8X19JlP4IC3LqPx
          claim_id: c_HDcdtVJwF0LFp_cv98C8TQ
          source_id: s_N89ATPeVWzKqPZ43Q3rMpw
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第二甲第四十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_N89ATPeVWzKqPZ43Q3rMpw
            source_type: api_record
            title: 中国历代人物传记资料库：王乾（CBDB 273125）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273125&o=json
            external_identifier: CBDB:273125
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.896Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_sYxtGPb4CL3WrP3V3fvmVA
        status: active
        display_name: 王乾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_U4nr_xRw5xtnrtZzuj4b4O
        subject_person_id: p_h5J7FNmYNZPV9EJQtShSE1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WrcoN9CL6jsGtB4NtmzaYe
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CQWRNqqRr24Kd7A_Ac3B5q
          claim_id: c_U4nr_xRw5xtnrtZzuj4b4O
          source_id: s_DMvKRFRZHXze6Jr9xDSaC9
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第二甲第四十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DMvKRFRZHXze6Jr9xDSaC9
            source_type: api_record
            title: 中国历代人物传记资料库：王迪（CBDB 273123）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273123&o=json
            external_identifier: CBDB:273123
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.895Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_h5J7FNmYNZPV9EJQtShSE1
        status: active
        display_name: 王迪
        merged_into_person_id: null
    - claim:
        id: c_Bw9qux3nhRdHE9NqJCe7SA
        subject_person_id: p_j4JnCmRKYH94287C5o7uex
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WrcoN9CL6jsGtB4NtmzaYe
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jt5x5uMzL5JxX852JkN_Rv
          claim_id: c_Bw9qux3nhRdHE9NqJCe7SA
          source_id: s_atZTZHBrHbzruTPYSJzGxJ
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第二甲第四十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_atZTZHBrHbzruTPYSJzGxJ
            source_type: api_record
            title: 中国历代人物传记资料库：王玄（CBDB 273124）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273124&o=json
            external_identifier: CBDB:273124
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.896Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_j4JnCmRKYH94287C5o7uex
        status: active
        display_name: 王玄
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王良翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良翰 | accepted |
| birth.date | 1462年 | accepted |
| bio.summary | 王良翰（生于1462年），明人物。明清進士進士，籍贯常熟，入仕進士，曾任訓導。（中国历代人物传记资料库 CBDB 201479） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sYxtGPb4CL3WrP3V3fvmVA | 王乾 | accepted |
| ancestors | p_h5J7FNmYNZPV9EJQtShSE1 | 王迪 | accepted |
| ancestors | p_j4JnCmRKYH94287C5o7uex | 王玄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王迪（CBDB 273123）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273123&o=json)
- [中国历代人物传记资料库：王良翰（CBDB 201479）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201479&o=json)
- [中国历代人物传记资料库：王乾（CBDB 273125）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273125&o=json)
- [中国历代人物传记资料库：王玄（CBDB 273124）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273124&o=json)
