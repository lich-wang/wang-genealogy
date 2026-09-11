---
schema: wang-person/v1
id: p_FXHwcoHY4AFBFWRSSNw52j
status: active
merged_into: null
display_name: 王夢證
cbdb_id: 22172
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MKk4eSrNrqGAZikTbUp6q7
        subject_person_id: p_FXHwcoHY4AFBFWRSSNw52j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢證，宋人物。中国历代人物传记资料库（CBDB）以人物编号 22172 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_TaDZ9F5af-bjgKxHsG-vMv
          claim_id: c_MKk4eSrNrqGAZikTbUp6q7
          source_id: s_v8Q2d8qzHzCpc4ytk1RoKn
          stance: supports
          locator: CBDB:22172
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_v8Q2d8qzHzCpc4ytk1RoKn
            source_type: api_record
            title: 中国历代人物传记资料库：王夢證（CBDB 22172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22172&o=json
            external_identifier: CBDB:22172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oRAMQz3WjL36jAeiGkjKtS
        subject_person_id: p_FXHwcoHY4AFBFWRSSNw52j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢證
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XL8beLM7Wt6CNCiu6X1vEh
          claim_id: c_oRAMQz3WjL36jAeiGkjKtS
          source_id: s_v8Q2d8qzHzCpc4ytk1RoKn
          stance: supports
          locator: CBDB:22172
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_v8Q2d8qzHzCpc4ytk1RoKn
            source_type: api_record
            title: 中国历代人物传记资料库：王夢證（CBDB 22172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22172&o=json
            external_identifier: CBDB:22172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_vnkN2yVruN3CgPdhRBkV2d
        subject_person_id: p_FXHwcoHY4AFBFWRSSNw52j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D4suc6s36QDqEBF4Wvu32S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BnKw828kkqO3wuRto0ITj7
          claim_id: c_vnkN2yVruN3CgPdhRBkV2d
          source_id: s_KTMHs4p9av1BFZxbmEWY6K
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，159 王九言墓志：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KTMHs4p9av1BFZxbmEWY6K
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣慶（CBDB 696907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696907&o=json
            external_identifier: CBDB:696907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.554Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_D4suc6s36QDqEBF4Wvu32S
        status: active
        display_name: 王嗣慶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_lm8BcdKiaC-G31wviMJrRr
        subject_person_id: p_FXHwcoHY4AFBFWRSSNw52j
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LKzDYAPDmX1Dcm3kwWWk7w
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tnN5fHyRQQJSfGXPCGkuqN
          claim_id: c_lm8BcdKiaC-G31wviMJrRr
          source_id: s_v8Q2d8qzHzCpc4ytk1RoKn
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，159 王九言墓志：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LKzDYAPDmX1Dcm3kwWWk7w
        status: active
        display_name: 王九言
        merged_into_person_id: null
  other: []
---

# 王夢證

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王夢證，宋人物。中国历代人物传记资料库（CBDB）以人物编号 22172 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王夢證 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_D4suc6s36QDqEBF4Wvu32S | 王嗣慶 | accepted |
| descendants | p_LKzDYAPDmX1Dcm3kwWWk7w | 王九言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夢證（CBDB 22172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22172&o=json)
- [中国历代人物传记资料库：王嗣慶（CBDB 696907）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696907&o=json)
