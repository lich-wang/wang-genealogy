---
schema: wang-person/v1
id: p_2zR3kCcvdMr3eo1Lp4b4JK
status: active
merged_into: null
display_name: 王象某
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x1rmPa6nNcLrTWMBVgPMs9
        subject_person_id: p_2zR3kCcvdMr3eo1Lp4b4JK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象某
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pZAgVvaosPYadSoTNahx2o
          claim_id: c_x1rmPa6nNcLrTWMBVgPMs9
          source_id: s_6rTnHpG9hZ3MpCR5nA6Y3p
          stance: supports
          locator: CBDB:220283
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（220283）
          source: &a1
            id: s_6rTnHpG9hZ3MpCR5nA6Y3p
            source_type: api_record
            title: 中国历代人物传记资料库：王象某（CBDB 220283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220283&o=json
            external_identifier: CBDB:220283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.304Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J3VvG4HJSmwCQe4rSJRCAr
        subject_person_id: p_2zR3kCcvdMr3eo1Lp4b4JK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象某，明人物。萬曆八年進士，籍贯新城。（中国历代人物传记资料库 CBDB 220283）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zSeNTqkZt2nCsbyK47NXTj
          claim_id: c_J3VvG4HJSmwCQe4rSJRCAr
          source_id: s_6rTnHpG9hZ3MpCR5nA6Y3p
          stance: supports
          locator: CBDB:220283
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-oln34xRC91DhcWGz0fy4T
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2zR3kCcvdMr3eo1Lp4b4JK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E9tW4pSlNRi7GXzmAFAyJo
          claim_id: c_-oln34xRC91DhcWGz0fy4T
          source_id: s_JJulMMA36XHWH2F5ZUf4SY
          stance: supports
          locator: CBDB：兄弟 王象蒙（206595）之父／母 王之辅
          quotation: null
          interpretation_note: 由兄弟关系推断：王象某 与 王象蒙 为同胞（CBDB 记「兄」），王象蒙 之父／母即 王象某 之父／母。
          source:
            id: s_JJulMMA36XHWH2F5ZUf4SY
            source_type: api_record
            title: 中国历代人物传记资料库：王象某（CBDB 220283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220283&o=json
            external_identifier: CBDB:220283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VLPN2ybQtkqyCPrJiYL7vx
        status: active
        display_name: 王之辅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_AunvSsEyLtXqvV9X-Xzpfr
        subject_person_id: p_2zR3kCcvdMr3eo1Lp4b4JK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UCuWmdu88wkXMEGK9geKmL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WyID35qiTDXVt9839bjvSE
          claim_id: c_AunvSsEyLtXqvV9X-Xzpfr
          source_id: s_JJulMMA36XHWH2F5ZUf4SY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206595 王象蒙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JJulMMA36XHWH2F5ZUf4SY
            source_type: api_record
            title: 中国历代人物传记资料库：王象某（CBDB 220283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220283&o=json
            external_identifier: CBDB:220283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UCuWmdu88wkXMEGK9geKmL
        status: active
        display_name: 王象蒙
        merged_into_person_id: null
---

# 王象某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王象某 | accepted |
| bio.summary | 王象某，明人物。萬曆八年進士，籍贯新城。（中国历代人物传记资料库 CBDB 220283） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VLPN2ybQtkqyCPrJiYL7vx | 王之辅 | accepted |
| other | p_UCuWmdu88wkXMEGK9geKmL | 王象蒙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王象某（CBDB 220283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220283&o=json)
