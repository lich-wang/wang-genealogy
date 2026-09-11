---
schema: wang-person/v1
id: p_LG7z9nE3SbHJEkwafJSkBi
status: active
merged_into: null
display_name: 王鐸
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Stpmpm1JwdUmnHPk1dC61c
        subject_person_id: p_LG7z9nE3SbHJEkwafJSkBi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F8ZPt3CzDTgxCCp3wN6p45
          claim_id: c_Stpmpm1JwdUmnHPk1dC61c
          source_id: s_hLepfNovessaCB1mZXaZU1
          stance: supports
          locator: CBDB:200528
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200528）
          source: &a1
            id: s_hLepfNovessaCB1mZXaZU1
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 200528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200528&o=json
            external_identifier: CBDB:200528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.616Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_iXeCC6pjbd1nPK3XheJtHN
        subject_person_id: p_LG7z9nE3SbHJEkwafJSkBi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1442年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7Ss5cvaSvj58uQxc8qcSwu
          claim_id: c_iXeCC6pjbd1nPK3XheJtHN
          source_id: s_hLepfNovessaCB1mZXaZU1
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
        id: c_AmswqjGBaxmb1MBCAVz18i
        subject_person_id: p_LG7z9nE3SbHJEkwafJSkBi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐸（生于1442年），明人物。明清進士進士，籍贯保安，入仕進士。（中国历代人物传记资料库 CBDB 200528）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__qtInz1Vh5Sp77FCAeKIa_
          claim_id: c_AmswqjGBaxmb1MBCAVz18i
          source_id: s_hLepfNovessaCB1mZXaZU1
          stance: supports
          locator: CBDB:200528
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_I1NlPLoI12ya_MACWX5CN-
        subject_person_id: p_PFnZLXWBaZSZreaimdGwAe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LG7z9nE3SbHJEkwafJSkBi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rg1c628F704wbSCH_28UIv
          claim_id: c_I1NlPLoI12ya_MACWX5CN-
          source_id: s_2TVn1dFcpjb5BZcZ36Ds1b
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第七十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2TVn1dFcpjb5BZcZ36Ds1b
            source_type: api_record
            title: 中国历代人物传记资料库：王瑀（CBDB 259316）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259316&o=json
            external_identifier: CBDB:259316
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.455Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PFnZLXWBaZSZreaimdGwAe
        status: active
        display_name: 王瑀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Gi7WKggn4N6727VvaZkNgG
        subject_person_id: p_JVxcpfuVxrWmTe4RKzwMeJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LG7z9nE3SbHJEkwafJSkBi
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__OQM_91CmmO9I0EeXbH570
          claim_id: c_Gi7WKggn4N6727VvaZkNgG
          source_id: s_hyLygUvMHpPYWTD47hiBPS
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第七十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hyLygUvMHpPYWTD47hiBPS
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 259314）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259314&o=json
            external_identifier: CBDB:259314
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.454Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JVxcpfuVxrWmTe4RKzwMeJ
        status: active
        display_name: 王欽
        merged_into_person_id: null
    - claim:
        id: c_2bBpufPuMlCjSVn_AC-fR1
        subject_person_id: p_TEAq1hNUdB984HYweMz2mw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LG7z9nE3SbHJEkwafJSkBi
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RG8gFZTfC7Lbw4P3iwnEWu
          claim_id: c_2bBpufPuMlCjSVn_AC-fR1
          source_id: s_pJ7dMAGVksYrYKMPcDEoPs
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第七十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pJ7dMAGVksYrYKMPcDEoPs
            source_type: api_record
            title: 中国历代人物传记资料库：王諒（CBDB 259315）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259315&o=json
            external_identifier: CBDB:259315
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.454Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_TEAq1hNUdB984HYweMz2mw
        status: active
        display_name: 王諒
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王鐸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鐸 | accepted |
| birth.date | 1442年 | accepted |
| bio.summary | 王鐸（生于1442年），明人物。明清進士進士，籍贯保安，入仕進士。（中国历代人物传记资料库 CBDB 200528） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PFnZLXWBaZSZreaimdGwAe | 王瑀 | accepted |
| ancestors | p_JVxcpfuVxrWmTe4RKzwMeJ | 王欽 | accepted |
| ancestors | p_TEAq1hNUdB984HYweMz2mw | 王諒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鐸（CBDB 200528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200528&o=json)
- [中国历代人物传记资料库：王諒（CBDB 259315）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259315&o=json)
- [中国历代人物传记资料库：王欽（CBDB 259314）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259314&o=json)
- [中国历代人物传记资料库：王瑀（CBDB 259316）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259316&o=json)
