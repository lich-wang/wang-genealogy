---
schema: wang-person/v1
id: p_fQRM5daE8Wp7q6E4q4CiyU
status: active
merged_into: null
display_name: 王整
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NqAQXapAY4QkvPWhUxdP5q
        subject_person_id: p_fQRM5daE8Wp7q6E4q4CiyU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王整
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YJPSG2DmA33gpra3QrKDrJ
          claim_id: c_NqAQXapAY4QkvPWhUxdP5q
          source_id: s_YKpBZT3wCJyrDyQ2N39GfG
          stance: supports
          locator: CBDB:266730
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266730）
          source: &a1
            id: s_YKpBZT3wCJyrDyQ2N39GfG
            source_type: api_record
            title: 中国历代人物传记资料库：王整（CBDB 266730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266730&o=json
            external_identifier: CBDB:266730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.727Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rYw48qr182dcLn4BYDGKeR
        subject_person_id: p_fQRM5daE8Wp7q6E4q4CiyU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王整，明人物。弘治六年進士，籍贯邢臺。（中国历代人物传记资料库 CBDB 266730）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__J3r2UcEPiStdZjkgiKsMx
          claim_id: c_rYw48qr182dcLn4BYDGKeR
          source_id: s_YKpBZT3wCJyrDyQ2N39GfG
          stance: supports
          locator: CBDB:266730
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_TeRMUtfPwpqfP-P-ERQclt
        subject_person_id: p_fQRM5daE8Wp7q6E4q4CiyU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xF6zkmGrf6YvrKuUEphBZ1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WSXXxlRTEVXXf54rUmqiYJ
          claim_id: c_TeRMUtfPwpqfP-P-ERQclt
          source_id: s_YKpBZT3wCJyrDyQ2N39GfG
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第二百零四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xF6zkmGrf6YvrKuUEphBZ1
        status: active
        display_name: 王震
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王整

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王整 | accepted |
| bio.summary | 王整，明人物。弘治六年進士，籍贯邢臺。（中国历代人物传记资料库 CBDB 266730） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_xF6zkmGrf6YvrKuUEphBZ1 | 王震 | accepted |

## 外部来源

- [中国历代人物传记资料库：王整（CBDB 266730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266730&o=json)
