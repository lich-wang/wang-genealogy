---
schema: wang-person/v1
id: p_vYCsSRXMz6GnVh5uA4fCjd
status: active
merged_into: null
display_name: 王邁
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pZfrC5Pt6VUqrnQ4jGKBBQ
        subject_person_id: p_vYCsSRXMz6GnVh5uA4fCjd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4VxeoTxtxGYHccEi4zP1Dh
          claim_id: c_pZfrC5Pt6VUqrnQ4jGKBBQ
          source_id: s_wx1Wdo4jZASAs71p5SL1EJ
          stance: supports
          locator: CBDB:36926
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（36926）
          source: &a1
            id: s_wx1Wdo4jZASAs71p5SL1EJ
            source_type: api_record
            title: 中国历代人物传记资料库：王邁（CBDB 36926）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36926&o=json
            external_identifier: CBDB:36926
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.185Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LEc1wp9VNxwK2CFFiKAArv
        subject_person_id: p_vYCsSRXMz6GnVh5uA4fCjd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邁，宋人物。籍贯巢縣。（中国历代人物传记资料库 CBDB 36926）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_E7aWEax_iaWxp7Tne17phM
          claim_id: c_LEc1wp9VNxwK2CFFiKAArv
          source_id: s_wx1Wdo4jZASAs71p5SL1EJ
          stance: supports
          locator: CBDB:36926
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_meBXeH4VGaC1cdbDU8UnjZ
        subject_person_id: p_qdfj8n9aJt992f6xYnsVk6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vYCsSRXMz6GnVh5uA4fCjd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_79_OgGaMopA3a2Xo2d5zb-
          claim_id: c_meBXeH4VGaC1cdbDU8UnjZ
          source_id: s_IUYd_CBWkMOBeQ-zNt4hTw
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1786）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_IUYd_CBWkMOBeQ-zNt4hTw
            source_type: api_record
            title: 中国历代人物传记资料库：王邁（CBDB 36926）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36926&o=json
            external_identifier: CBDB:36926
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qdfj8n9aJt992f6xYnsVk6
        status: active
        display_name: 王之道
        merged_into_person_id: null
    - claim:
        id: c_6xxHbGwcYixv7gyrldCc7v
        subject_person_id: p_2x1kEfTy9Rrf9vMAC4nm4e
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_vYCsSRXMz6GnVh5uA4fCjd
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aRhxTmCBNRKxMXEfVxBvSc
          claim_id: c_6xxHbGwcYixv7gyrldCc7v
          source_id: s_IUYd_CBWkMOBeQ-zNt4hTw
          stance: supports
          locator: CBDB 亲属：母（KinPerson 36923）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_IUYd_CBWkMOBeQ-zNt4hTw
            source_type: api_record
            title: 中国历代人物传记资料库：王邁（CBDB 36926）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36926&o=json
            external_identifier: CBDB:36926
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2x1kEfTy9Rrf9vMAC4nm4e
        status: active
        display_name: 孫氏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王邁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邁 | accepted |
| bio.summary | 王邁，宋人物。籍贯巢縣。（中国历代人物传记资料库 CBDB 36926） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qdfj8n9aJt992f6xYnsVk6 | 王之道 | accepted |
| parents | p_2x1kEfTy9Rrf9vMAC4nm4e | 孫氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王邁（CBDB 36926）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36926&o=json)
