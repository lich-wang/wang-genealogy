---
schema: wang-person/v1
id: p_EoJk1Y5s39yxBJTaiKbEQe
status: active
merged_into: null
display_name: 王昊
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zo4Sd1YcW6LGCfQ1FfQTdu
        subject_person_id: p_EoJk1Y5s39yxBJTaiKbEQe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SN72tEFqhZ5B3zJdbKhoU7
          claim_id: c_Zo4Sd1YcW6LGCfQ1FfQTdu
          source_id: s_c86NwDAvjxnvgHHxfBCn5p
          stance: supports
          locator: CBDB:200990
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200990）
          source: &a1
            id: s_c86NwDAvjxnvgHHxfBCn5p
            source_type: api_record
            title: 中国历代人物传记资料库：王昊（CBDB 200990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200990&o=json
            external_identifier: CBDB:200990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.649Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pV8SD44RRvZZTF7sdaqMK4
        subject_person_id: p_EoJk1Y5s39yxBJTaiKbEQe
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1456年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K7Kjp2UX42FhjAYz1giHXu
          claim_id: c_pV8SD44RRvZZTF7sdaqMK4
          source_id: s_c86NwDAvjxnvgHHxfBCn5p
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
        id: c_V6vCfqmVpdG9Z4gX2VeMBd
        subject_person_id: p_EoJk1Y5s39yxBJTaiKbEQe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昊（生于1456年），明人物。明清進士進士，籍贯衡陽，入仕進士。（中国历代人物传记资料库 CBDB 200990）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HcoC02WcpvjL5nA-LrpKY2
          claim_id: c_V6vCfqmVpdG9Z4gX2VeMBd
          source_id: s_c86NwDAvjxnvgHHxfBCn5p
          stance: supports
          locator: CBDB:200990
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EWZvwX3aecOPL1E4sXJzzi
        subject_person_id: p_URk2BrLDKqiyhHZQPHt91g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EoJk1Y5s39yxBJTaiKbEQe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p6yqU9aBKMuAfGbUZvUkQx
          claim_id: c_EWZvwX3aecOPL1E4sXJzzi
          source_id: s_c86NwDAvjxnvgHHxfBCn5p
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第九十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_URk2BrLDKqiyhHZQPHt91g
        status: active
        display_name: 王貴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_pIHC5k19JOzov2trBE7u3g
        subject_person_id: p_EoJk1Y5s39yxBJTaiKbEQe
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_aSdPG8ycM3vnoeBgDgVbHK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LuehjmmVOdrM8oqItOUxZv
          claim_id: c_pIHC5k19JOzov2trBE7u3g
          source_id: s_Sm6Sbv_V3Zn8I8rtkOfPjV
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第九十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Sm6Sbv_V3Zn8I8rtkOfPjV
            source_type: api_record
            title: 中国历代人物传记资料库：許氏(王昊妻)（CBDB 265671）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265671&o=json
            external_identifier: CBDB:265671
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aSdPG8ycM3vnoeBgDgVbHK
        status: active
        display_name: 許氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_kYxYm5jeDHlOwRWUIvvoXb
        subject_person_id: p_evzD6qcskC5Si9w9ieb42z
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EoJk1Y5s39yxBJTaiKbEQe
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6gohs3DCX_HbZJlyJc34X-
          claim_id: c_kYxYm5jeDHlOwRWUIvvoXb
          source_id: s_c86NwDAvjxnvgHHxfBCn5p
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第九十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_evzD6qcskC5Si9w9ieb42z
        status: active
        display_name: 王思誠
        merged_into_person_id: null
    - claim:
        id: c_d_VPA8qhOxK6JSsWUIf86p
        subject_person_id: p_JyC3UvQ5oVNT52HSy7kSZc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EoJk1Y5s39yxBJTaiKbEQe
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gk1KQHgYqD0KYjfV2-EGqc
          claim_id: c_d_VPA8qhOxK6JSsWUIf86p
          source_id: s_c86NwDAvjxnvgHHxfBCn5p
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第九十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JyC3UvQ5oVNT52HSy7kSZc
        status: active
        display_name: 王添勝
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_XTHhDKrPxm5E0s8yDUQByu
        subject_person_id: p_6M4HVWJcfPdnrou8i4MDus
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EoJk1Y5s39yxBJTaiKbEQe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y4mOVT8YArCK9h6yDXLLMq
          claim_id: c_XTHhDKrPxm5E0s8yDUQByu
          source_id: s_hvuEDm6Hjf5BGQCMzJhLPq
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200990 王昊）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hvuEDm6Hjf5BGQCMzJhLPq
            source_type: api_record
            title: 中国历代人物传记资料库：王潮（CBDB 265674）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265674&o=json
            external_identifier: CBDB:265674
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6M4HVWJcfPdnrou8i4MDus
        status: active
        display_name: 王潮
        merged_into_person_id: null
    - claim:
        id: c_NUpzNSueTkiHvvDpEOLvYS
        subject_person_id: p_EoJk1Y5s39yxBJTaiKbEQe
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GpCeMqr77DJz3vuKGSCddh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cHyLJJX0lEnmHP5EkBWWdA
          claim_id: c_NUpzNSueTkiHvvDpEOLvYS
          source_id: s_pCtIJw5FwRujEHVNvmHFAL
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200990 王昊）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pCtIJw5FwRujEHVNvmHFAL
            source_type: api_record
            title: 中国历代人物传记资料库：王洪（CBDB 265672）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265672&o=json
            external_identifier: CBDB:265672
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GpCeMqr77DJz3vuKGSCddh
        status: active
        display_name: 王洪
        merged_into_person_id: null
    - claim:
        id: c_mui48RLqwR8mXslxYg_eYa
        subject_person_id: p_EoJk1Y5s39yxBJTaiKbEQe
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PCHc8haH6HepKbDig5Gxtg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z5UdwkWjA2fDIx7LfJuU8V
          claim_id: c_mui48RLqwR8mXslxYg_eYa
          source_id: s_6ObIC9Hr6_Zw2SujSQsg6C
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200990 王昊）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6ObIC9Hr6_Zw2SujSQsg6C
            source_type: api_record
            title: 中国历代人物传记资料库：王潤（CBDB 265675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265675&o=json
            external_identifier: CBDB:265675
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PCHc8haH6HepKbDig5Gxtg
        status: active
        display_name: 王潤
        merged_into_person_id: null
    - claim:
        id: c_3BJSKUPbwBbO5aKARmJyHl
        subject_person_id: p_EoJk1Y5s39yxBJTaiKbEQe
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_X8FVL1x3K1cGDDJ4h9uCZs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6d71gtjv9oVwqUpdSZJfoM
          claim_id: c_3BJSKUPbwBbO5aKARmJyHl
          source_id: s_0e0UX0T_niKpzhxVXUzpG4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200990 王昊）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0e0UX0T_niKpzhxVXUzpG4
            source_type: api_record
            title: 中国历代人物传记资料库：王湖（CBDB 265673）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265673&o=json
            external_identifier: CBDB:265673
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_X8FVL1x3K1cGDDJ4h9uCZs
        status: active
        display_name: 王湖
        merged_into_person_id: null
    - claim:
        id: c_6975JZG1xciPxVblk7tD7z
        subject_person_id: p_EoJk1Y5s39yxBJTaiKbEQe
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zeW711oJeLWgrfVdMmfSUw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nmwQ69VDOvS3ZvPqwJEoyh
          claim_id: c_6975JZG1xciPxVblk7tD7z
          source_id: s_oWGic9cG1wEucdX4-dLtDy
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200990 王昊）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oWGic9cG1wEucdX4-dLtDy
            source_type: api_record
            title: 中国历代人物传记资料库：王澗（CBDB 265676）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265676&o=json
            external_identifier: CBDB:265676
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zeW711oJeLWgrfVdMmfSUw
        status: active
        display_name: 王澗
        merged_into_person_id: null
---

# 王昊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昊 | accepted |
| birth.date | 1456年 | accepted |
| bio.summary | 王昊（生于1456年），明人物。明清進士進士，籍贯衡陽，入仕進士。（中国历代人物传记资料库 CBDB 200990） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_URk2BrLDKqiyhHZQPHt91g | 王貴 | accepted |
| spouses | p_aSdPG8ycM3vnoeBgDgVbHK | 許氏 | accepted |
| ancestors | p_evzD6qcskC5Si9w9ieb42z | 王思誠 | accepted |
| ancestors | p_JyC3UvQ5oVNT52HSy7kSZc | 王添勝 | accepted |
| other | p_6M4HVWJcfPdnrou8i4MDus | 王潮 | accepted |
| other | p_GpCeMqr77DJz3vuKGSCddh | 王洪 | accepted |
| other | p_PCHc8haH6HepKbDig5Gxtg | 王潤 | accepted |
| other | p_X8FVL1x3K1cGDDJ4h9uCZs | 王湖 | accepted |
| other | p_zeW711oJeLWgrfVdMmfSUw | 王澗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王潮（CBDB 265674）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265674&o=json)
- [中国历代人物传记资料库：王昊（CBDB 200990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200990&o=json)
- [中国历代人物传记资料库：王洪（CBDB 265672）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265672&o=json)
- [中国历代人物传记资料库：王湖（CBDB 265673）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265673&o=json)
- [中国历代人物传记资料库：王澗（CBDB 265676）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265676&o=json)
- [中国历代人物传记资料库：王潤（CBDB 265675）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265675&o=json)
- [中国历代人物传记资料库：許氏(王昊妻)（CBDB 265671）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265671&o=json)
