---
schema: wang-person/v1
id: p_aPcrqB9XkxSACSANyGxVsW
status: active
merged_into: null
display_name: 王軒
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6kF9nTkatGDnq2tCtQ6rV4
        subject_person_id: p_aPcrqB9XkxSACSANyGxVsW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FHMvn8yAnSGn4PDqvFzP2g
          claim_id: c_6kF9nTkatGDnq2tCtQ6rV4
          source_id: s_DjdLKPpkYfPVp98V5ZvCZr
          stance: supports
          locator: CBDB:205226
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205226）
          source: &a1
            id: s_DjdLKPpkYfPVp98V5ZvCZr
            source_type: api_record
            title: 中国历代人物传记资料库：王軒（CBDB 205226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205226&o=json
            external_identifier: CBDB:205226
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.857Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BYzfFjYiZMTDr6sFdbhTj6
        subject_person_id: p_aPcrqB9XkxSACSANyGxVsW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1546年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FmKdeToZTANL4s42zvS8FT
          claim_id: c_BYzfFjYiZMTDr6sFdbhTj6
          source_id: s_DjdLKPpkYfPVp98V5ZvCZr
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
        id: c_KFff6CNq25N7jR4tUE3tN7
        subject_person_id: p_aPcrqB9XkxSACSANyGxVsW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軒（生于1546年），明人物。明清進士進士，籍贯清苑，入仕進士。（中国历代人物传记资料库 CBDB 205226）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0wp7gUe7FwKNloKV3n5g8M
          claim_id: c_KFff6CNq25N7jR4tUE3tN7
          source_id: s_DjdLKPpkYfPVp98V5ZvCZr
          stance: supports
          locator: CBDB:205226
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vjcbi1cI2ggGyXDrNPWRJb
        subject_person_id: p_MXg6TuvxewxsrDfzMYvXK4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aPcrqB9XkxSACSANyGxVsW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I9Numu2x8vxd9Fvky1T9NB
          claim_id: c_vjcbi1cI2ggGyXDrNPWRJb
          source_id: s_DjdLKPpkYfPVp98V5ZvCZr
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第二甲第五十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MXg6TuvxewxsrDfzMYvXK4
        status: active
        display_name: 王世官
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_LRjryn5aHsUzYk_95Z-YFO
        subject_person_id: p_aPcrqB9XkxSACSANyGxVsW
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_5hLXW3X87TB1QQN7JMKiDq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E7KSyCjVtdpf0tXZXy-pJz
          claim_id: c_LRjryn5aHsUzYk_95Z-YFO
          source_id: s_Qt29oZ_0_x-Do2eplIHFbf
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第二甲第五十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Qt29oZ_0_x-Do2eplIHFbf
            source_type: api_record
            title: 中国历代人物传记资料库：樊氏(王軒妻)（CBDB 330013）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330013&o=json
            external_identifier: CBDB:330013
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5hLXW3X87TB1QQN7JMKiDq
        status: active
        display_name: 樊氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_gk4rq9EakKiUqH5u8lsjfT
        subject_person_id: p_isrXBK1VMUqoC6uZYKJHeE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aPcrqB9XkxSACSANyGxVsW
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RF8D6q_rSGft7-ZrADqRJv
          claim_id: c_gk4rq9EakKiUqH5u8lsjfT
          source_id: s_DjdLKPpkYfPVp98V5ZvCZr
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第二甲第五十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_isrXBK1VMUqoC6uZYKJHeE
        status: active
        display_name: 王讓
        merged_into_person_id: null
    - claim:
        id: c_RXPpYAJU_iia_q-dwWUGlP
        subject_person_id: p_cBxTbbJnkV5KHHjQSg8Ntf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aPcrqB9XkxSACSANyGxVsW
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jMv1x28YLY47Klsj6uSg9k
          claim_id: c_RXPpYAJU_iia_q-dwWUGlP
          source_id: s_DjdLKPpkYfPVp98V5ZvCZr
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第二甲第五十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cBxTbbJnkV5KHHjQSg8Ntf
        status: active
        display_name: 王景陞
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王軒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王軒 | accepted |
| birth.date | 1546年 | accepted |
| bio.summary | 王軒（生于1546年），明人物。明清進士進士，籍贯清苑，入仕進士。（中国历代人物传记资料库 CBDB 205226） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MXg6TuvxewxsrDfzMYvXK4 | 王世官 | accepted |
| spouses | p_5hLXW3X87TB1QQN7JMKiDq | 樊氏 | accepted |
| ancestors | p_isrXBK1VMUqoC6uZYKJHeE | 王讓 | accepted |
| ancestors | p_cBxTbbJnkV5KHHjQSg8Ntf | 王景陞 | accepted |

## 外部来源

- [中国历代人物传记资料库：樊氏(王軒妻)（CBDB 330013）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330013&o=json)
- [中国历代人物传记资料库：王軒（CBDB 205226）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205226&o=json)
