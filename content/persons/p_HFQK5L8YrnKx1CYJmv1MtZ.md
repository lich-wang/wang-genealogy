---
schema: wang-person/v1
id: p_HFQK5L8YrnKx1CYJmv1MtZ
status: active
merged_into: null
display_name: 王汲
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_87X481wPRoMPYxh4ZHRbAB
        subject_person_id: p_HFQK5L8YrnKx1CYJmv1MtZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6ny6GhqpKFHkVCNvDJHiYS
          claim_id: c_87X481wPRoMPYxh4ZHRbAB
          source_id: s_9ccLgyKD9G6pgHjbxgKBXV
          stance: supports
          locator: CBDB:26509
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26509）
          source: &a1
            id: s_9ccLgyKD9G6pgHjbxgKBXV
            source_type: api_record
            title: 中国历代人物传记资料库：王汲（CBDB 26509）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26509&o=json
            external_identifier: CBDB:26509
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CB5EvKkncw6DURSc1KPoRe
        subject_person_id: p_HFQK5L8YrnKx1CYJmv1MtZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 982年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n3xJFeeBGyWtCGSN7RZ2ZK
          claim_id: c_CB5EvKkncw6DURSc1KPoRe
          source_id: s_9ccLgyKD9G6pgHjbxgKBXV
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
        id: c_4A27fZsqoWDZZ3rnu81AzX
        subject_person_id: p_HFQK5L8YrnKx1CYJmv1MtZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1040年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eb5JSPbwVB2KG1JfkAKTk8
          claim_id: c_4A27fZsqoWDZZ3rnu81AzX
          source_id: s_9ccLgyKD9G6pgHjbxgKBXV
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
        id: c_W8iAoDpyDbsPmfYdA3dQyw
        subject_person_id: p_HFQK5L8YrnKx1CYJmv1MtZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JFnkeBp7u9ZyuSFTRQKxbF
          claim_id: c_W8iAoDpyDbsPmfYdA3dQyw
          source_id: s_9ccLgyKD9G6pgHjbxgKBXV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_w2VBjzyBTL0qNCOQloo-AK
        subject_person_id: p_uxbPbmbrZFoELk9U2exDek
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HFQK5L8YrnKx1CYJmv1MtZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DYJOdBYZoEdzecoQjoyZGX
          claim_id: c_w2VBjzyBTL0qNCOQloo-AK
          source_id: s_eKwmYL7nLxMQFFXfwgAYus
          stance: supports
          locator: CBDB 双向互证（子 王汲 ⇄ 父 王明藻）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_eKwmYL7nLxMQFFXfwgAYus
            source_type: api_record
            title: 中国历代人物传记资料库：王明藻（CBDB 26508）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26508&o=json
            external_identifier: CBDB:26508
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_uxbPbmbrZFoELk9U2exDek
        status: active
        display_name: 王明藻
        merged_into_person_id: null
  children:
    - claim:
        id: c_VGn8YYgVYI-0_2pK0i9zzH
        subject_person_id: p_HFQK5L8YrnKx1CYJmv1MtZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NiDwYtQeM1mw9R2BpSH12J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_STvI5YvgaRIADQ3uiwXWmp
          claim_id: c_VGn8YYgVYI-0_2pK0i9zzH
          source_id: s_8bE4ZM3wpKGR5QKmEHmx7Q
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，一二四 王汲墓誌：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8bE4ZM3wpKGR5QKmEHmx7Q
            source_type: api_record
            title: 中国历代人物传记资料库：王尚辭（CBDB 696765）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696765&o=json
            external_identifier: CBDB:696765
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.552Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NiDwYtQeM1mw9R2BpSH12J
        status: active
        display_name: 王尚辭
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_o6AXaeEwx0ojpTKfPP2-Gg
        subject_person_id: p_88WC4Q1BzPCRUnQHKcX984
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HFQK5L8YrnKx1CYJmv1MtZ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VEbvH_VRHbn-qS2iXNyMkk
          claim_id: c_o6AXaeEwx0ojpTKfPP2-Gg
          source_id: s_UPM7btK78ccPWgZ4akAvDK
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，一二四 王汲墓誌：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UPM7btK78ccPWgZ4akAvDK
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 26507）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26507&o=json
            external_identifier: CBDB:26507
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_88WC4Q1BzPCRUnQHKcX984
        status: active
        display_name: 王福
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王汲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汲 | accepted |
| birth.date | 982年 | accepted |
| death.date | 1040年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uxbPbmbrZFoELk9U2exDek | 王明藻 | accepted |
| children | p_NiDwYtQeM1mw9R2BpSH12J | 王尚辭 | accepted |
| ancestors | p_88WC4Q1BzPCRUnQHKcX984 | 王福 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 26507）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26507&o=json)
- [中国历代人物传记资料库：王汲（CBDB 26509）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26509&o=json)
- [中国历代人物传记资料库：王明藻（CBDB 26508）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26508&o=json)
- [中国历代人物传记资料库：王尚辭（CBDB 696765）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696765&o=json)
