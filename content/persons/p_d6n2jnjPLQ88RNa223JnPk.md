---
schema: wang-person/v1
id: p_d6n2jnjPLQ88RNa223JnPk
status: active
merged_into: null
display_name: 王良佐
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_49kLP2eLLYvc51iBoSBPLh
        subject_person_id: p_d6n2jnjPLQ88RNa223JnPk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hWWcGkPrfJmGEAeAtDbqFA
          claim_id: c_49kLP2eLLYvc51iBoSBPLh
          source_id: s_eWWbkQ4EpArtRt35sVEC6x
          stance: supports
          locator: CBDB:126529
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126529）
          source: &a1
            id: s_eWWbkQ4EpArtRt35sVEC6x
            source_type: api_record
            title: 中国历代人物传记资料库：王良佐（CBDB 126529）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126529&o=json
            external_identifier: CBDB:126529
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GdPv2WGxHZNMe8qiHPeh25
        subject_person_id: p_d6n2jnjPLQ88RNa223JnPk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良佐，明人物。明清進士進士，籍贯夷陵州，入仕進士。（中国历代人物传记资料库 CBDB 126529）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fxj3tIgUPqC7aAyYtBV8Se
          claim_id: c_GdPv2WGxHZNMe8qiHPeh25
          source_id: s_eWWbkQ4EpArtRt35sVEC6x
          stance: supports
          locator: CBDB:126529
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_kXZTfTVNwWgZ4Tia8nE9ed
        subject_person_id: p_d6n2jnjPLQ88RNa223JnPk
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_7hAjJKuKxkRvKCyeeXpsZg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M4hE0Ysrh6LDuL8gSQRc0o
          claim_id: c_kXZTfTVNwWgZ4Tia8nE9ed
          source_id: s_Zjs-k7TH5CGH3hM4sZcwsz
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Zjs-k7TH5CGH3hM4sZcwsz
            source_type: api_record
            title: 中国历代人物传记资料库：伍氏(王良佐妻)（CBDB 273650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273650&o=json
            external_identifier: CBDB:273650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7hAjJKuKxkRvKCyeeXpsZg
        status: active
        display_name: 伍氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_GQVmHcuIC5znfxVHZLoy53
        subject_person_id: p_AQqXiLmd9APKeEofkCx3Nv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_d6n2jnjPLQ88RNa223JnPk
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pvqYsUAKg8Afl9qE-G3vTA
          claim_id: c_GQVmHcuIC5znfxVHZLoy53
          source_id: s_eWWbkQ4EpArtRt35sVEC6x
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AQqXiLmd9APKeEofkCx3Nv
        status: active
        display_name: 王文選
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_6hkX8WFb54_lRLbx934qhF
        subject_person_id: p_GyzPFPanTVAPD2hvNqVwRo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_d6n2jnjPLQ88RNa223JnPk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vfknJ3F4K8y1N9BYaXLBQ-
          claim_id: c_6hkX8WFb54_lRLbx934qhF
          source_id: s_5F_-ybCctaft5n6AqsuJeL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126529 王良佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5F_-ybCctaft5n6AqsuJeL
            source_type: api_record
            title: 中国历代人物传记资料库：王良啟（CBDB 273654）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273654&o=json
            external_identifier: CBDB:273654
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GyzPFPanTVAPD2hvNqVwRo
        status: active
        display_name: 王良啟
        merged_into_person_id: null
    - claim:
        id: c_dcOzkyeHWcLHYb8ZRlYuN_
        subject_person_id: p_d6n2jnjPLQ88RNa223JnPk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_w5p4ByW4BANfi9JLjsKXwn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i6SdOdy3bdOzXbuGwp6_2H
          claim_id: c_dcOzkyeHWcLHYb8ZRlYuN_
          source_id: s_huh-3SXlLG4joZ5ftbXVrs
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126529 王良佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_huh-3SXlLG4joZ5ftbXVrs
            source_type: api_record
            title: 中国历代人物传记资料库：王良臣（CBDB 273653）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273653&o=json
            external_identifier: CBDB:273653
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_w5p4ByW4BANfi9JLjsKXwn
        status: active
        display_name: 王良臣
        merged_into_person_id: null
---

# 王良佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良佐 | accepted |
| bio.summary | 王良佐，明人物。明清進士進士，籍贯夷陵州，入仕進士。（中国历代人物传记资料库 CBDB 126529） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_7hAjJKuKxkRvKCyeeXpsZg | 伍氏 | accepted |
| ancestors | p_AQqXiLmd9APKeEofkCx3Nv | 王文選 | accepted |
| other | p_GyzPFPanTVAPD2hvNqVwRo | 王良啟 | accepted |
| other | p_w5p4ByW4BANfi9JLjsKXwn | 王良臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良臣（CBDB 273653）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273653&o=json)
- [中国历代人物传记资料库：王良啟（CBDB 273654）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273654&o=json)
- [中国历代人物传记资料库：王良佐（CBDB 126529）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126529&o=json)
- [中国历代人物传记资料库：伍氏(王良佐妻)（CBDB 273650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273650&o=json)
