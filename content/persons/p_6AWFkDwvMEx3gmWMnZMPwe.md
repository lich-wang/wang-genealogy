---
schema: wang-person/v1
id: p_6AWFkDwvMEx3gmWMnZMPwe
status: active
merged_into: null
display_name: 王昺
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6dJeUQbhEF2WFvk3Ywrhhz
        subject_person_id: p_6AWFkDwvMEx3gmWMnZMPwe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vBq8unGEM31oZGRFbBngpb
          claim_id: c_6dJeUQbhEF2WFvk3Ywrhhz
          source_id: s_SUs9UsZEYNukhuLWGV3uqc
          stance: supports
          locator: CBDB:209880
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（209880）
          source: &a1
            id: s_SUs9UsZEYNukhuLWGV3uqc
            source_type: api_record
            title: 中国历代人物传记资料库：王昺（CBDB 209880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209880&o=json
            external_identifier: CBDB:209880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.985Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f4bzabZenzSMk2HM4jNPeN
        subject_person_id: p_6AWFkDwvMEx3gmWMnZMPwe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2jgmq38fPfLHkRYF4ZFxCF
          claim_id: c_f4bzabZenzSMk2HM4jNPeN
          source_id: s_SUs9UsZEYNukhuLWGV3uqc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_yW48DQyn-gG0-EmTHGWIYS
        subject_person_id: p_6AWFkDwvMEx3gmWMnZMPwe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2LvZRKXC4bvnUqu11G57yb
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5X-Zx25Xqn5bk9ZeHwKwDh
          claim_id: c_yW48DQyn-gG0-EmTHGWIYS
          source_id: s_hSdTPDWiNR5wL1nkYF2yMQ
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第二十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hSdTPDWiNR5wL1nkYF2yMQ
            source_type: api_record
            title: 中国历代人物传记资料库：王遵（CBDB 202897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202897&o=json
            external_identifier: CBDB:202897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.763Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2LvZRKXC4bvnUqu11G57yb
        status: active
        display_name: 王遵
        merged_into_person_id: null
    - claim:
        id: c_s36NOFEQu6lf4Sx_6e0Um9
        subject_person_id: p_6AWFkDwvMEx3gmWMnZMPwe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_scV3fKCNzuQtMWFnLNf0ZD
          claim_id: c_s36NOFEQu6lf4Sx_6e0Um9
          source_id: s_SUs9UsZEYNukhuLWGV3uqc
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第二甲第八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pv2pDE9A1jj2uMGHCGpC7T
        status: active
        display_name: 王廷
        merged_into_person_id: null
    - claim:
        id: c_Fu8C3PKU-_EFvpOddk8fnY
        subject_person_id: p_6AWFkDwvMEx3gmWMnZMPwe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PeNwc61mxTnzddmv7sBFLN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vbY5fw4YUoQrofgG8Z6JR9
          claim_id: c_Fu8C3PKU-_EFvpOddk8fnY
          source_id: s_SUs9UsZEYNukhuLWGV3uqc
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第九十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PeNwc61mxTnzddmv7sBFLN
        status: active
        display_name: 王延
        merged_into_person_id: null
  other: []
---

# 王昺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昺 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_2LvZRKXC4bvnUqu11G57yb | 王遵 | accepted |
| descendants | p_pv2pDE9A1jj2uMGHCGpC7T | 王廷 | accepted |
| descendants | p_PeNwc61mxTnzddmv7sBFLN | 王延 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昺（CBDB 209880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209880&o=json)
- [中国历代人物传记资料库：王遵（CBDB 202897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202897&o=json)
