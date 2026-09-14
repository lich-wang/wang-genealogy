---
schema: wang-person/v1
id: p_tcnc9U56UzCEYQHcMawuE4
status: active
merged_into: null
display_name: 王十朋
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dSM64YHV38zA4MDLipxqmz
        subject_person_id: p_tcnc9U56UzCEYQHcMawuE4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王十朋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FtkKWJSpA6QNPhfrchAcMb
          claim_id: c_dSM64YHV38zA4MDLipxqmz
          source_id: s_7HzyayY9Q2afFnRxZAR4YR
          stance: supports
          locator: CBDB:10598
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10598）
          source: &a1
            id: s_7HzyayY9Q2afFnRxZAR4YR
            source_type: api_record
            title: 中国历代人物传记资料库：王十朋（CBDB 10598）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10598&o=json
            external_identifier: CBDB:10598
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.537Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gnz7isdJW5WSMmP7wRHcv5
        subject_person_id: p_tcnc9U56UzCEYQHcMawuE4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1112年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jk71QGRPN3XxCjgnMFcuQ7
          claim_id: c_gnz7isdJW5WSMmP7wRHcv5
          source_id: s_7HzyayY9Q2afFnRxZAR4YR
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
        id: c_pN6U9RGyhMCeTuQis6YrW7
        subject_person_id: p_tcnc9U56UzCEYQHcMawuE4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1171年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BTwLkCBiT9pKx47Z5bU6oR
          claim_id: c_pN6U9RGyhMCeTuQis6YrW7
          source_id: s_7HzyayY9Q2afFnRxZAR4YR
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
        id: c_jmQ9yM8N1hoqVn1J54MxnR
        subject_person_id: p_tcnc9U56UzCEYQHcMawuE4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王十朋（1112年—1171年），宋人物。籍贯樂清，入仕進士，曾任三公、舍人院、左承議郎。（中国历代人物传记资料库 CBDB 10598）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LQMqMm2hOAfyOwK1kepuco
          claim_id: c_jmQ9yM8N1hoqVn1J54MxnR
          source_id: s_7HzyayY9Q2afFnRxZAR4YR
          stance: supports
          locator: CBDB:10598
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_e2-GlvjqW61HgJWP2tmAfb
        subject_person_id: p_tcnc9U56UzCEYQHcMawuE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ULmtAoZzYGxooqVVzFnV71
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MUcSw_X-pefV-kq1eHQJte
          claim_id: c_e2-GlvjqW61HgJWP2tmAfb
          source_id: s_xyIWcFmXjXgIztPwSB8J8g
          stance: supports
          locator: CBDB 亲属：父（KinPerson 10598）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_xyIWcFmXjXgIztPwSB8J8g
            source_type: api_record
            title: 中国历代人物传记资料库：王聞詩（CBDB 10599）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10599&o=json
            external_identifier: CBDB:10599
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ULmtAoZzYGxooqVVzFnV71
        status: active
        display_name: 王聞詩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_jEKAbKE2JJar2VKbwMOFhg
        subject_person_id: p_tcnc9U56UzCEYQHcMawuE4
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_N1cFqf5V8zqrnZsPC2aixb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3b9VNJKnJtreYsDgsFcZp5
          claim_id: c_jEKAbKE2JJar2VKbwMOFhg
          source_id: s_t3d7KDAwC8AJRR1EMI9Go8
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1347;1349：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_t3d7KDAwC8AJRR1EMI9Go8
            source_type: api_record
            title: 中国历代人物传记资料库：賈氏(王十朋妻)（CBDB 5173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5173&o=json
            external_identifier: CBDB:5173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_N1cFqf5V8zqrnZsPC2aixb
        status: active
        display_name: 賈氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_0T6xobmA55HTFyhybB-jus
        subject_person_id: p_rDLCqXC8sFot2X9WGy3gyb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tcnc9U56UzCEYQHcMawuE4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cExDsA8Q65KFl6xJNnLX8P
          claim_id: c_0T6xobmA55HTFyhybB-jus
          source_id: s_m9AkuXL52Y3JTiCItyIr7P
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 10598 王十朋）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_m9AkuXL52Y3JTiCItyIr7P
            source_type: api_record
            title: 中国历代人物传记资料库：王百朋（CBDB 37341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37341&o=json
            external_identifier: CBDB:37341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rDLCqXC8sFot2X9WGy3gyb
        status: active
        display_name: 王百朋
        merged_into_person_id: null
    - claim:
        id: c_rQgwNbNlKpEdIyMMGrOn8r
        subject_person_id: p_tcnc9U56UzCEYQHcMawuE4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wEcw3km21hYReL1ypv6aei
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xtFl1RYYmuBvEc0vb6BYvj
          claim_id: c_rQgwNbNlKpEdIyMMGrOn8r
          source_id: s_oMGvstFSBv9bhSTHG5UlBB
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 10598 王十朋）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oMGvstFSBv9bhSTHG5UlBB
            source_type: api_record
            title: 中国历代人物传记资料库：王壽朋（CBDB 18813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18813&o=json
            external_identifier: CBDB:18813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wEcw3km21hYReL1ypv6aei
        status: active
        display_name: 王壽朋
        merged_into_person_id: null
---

# 王十朋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王十朋 | accepted |
| birth.date | 1112年 | accepted |
| death.date | 1171年 | accepted |
| bio.summary | 王十朋（1112年—1171年），宋人物。籍贯樂清，入仕進士，曾任三公、舍人院、左承議郎。（中国历代人物传记资料库 CBDB 10598） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ULmtAoZzYGxooqVVzFnV71 | 王聞詩 | accepted |
| spouses | p_N1cFqf5V8zqrnZsPC2aixb | 賈氏 | accepted |
| other | p_rDLCqXC8sFot2X9WGy3gyb | 王百朋 | accepted |
| other | p_wEcw3km21hYReL1ypv6aei | 王壽朋 | accepted |

## 外部来源

- [中国历代人物传记资料库：賈氏(王十朋妻)（CBDB 5173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5173&o=json)
- [中国历代人物传记资料库：王百朋（CBDB 37341）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37341&o=json)
- [中国历代人物传记资料库：王十朋（CBDB 10598）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10598&o=json)
- [中国历代人物传记资料库：王壽朋（CBDB 18813）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18813&o=json)
- [中国历代人物传记资料库：王聞詩（CBDB 10599）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10599&o=json)
