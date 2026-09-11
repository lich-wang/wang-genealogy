---
schema: wang-person/v1
id: p_2LvZRKXC4bvnUqu11G57yb
status: active
merged_into: null
display_name: 王遵
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_46bXfPPUWi8ix2ckAZC74t
        subject_person_id: p_2LvZRKXC4bvnUqu11G57yb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RnmhMA9UPTHBduHMoW8XA7
          claim_id: c_46bXfPPUWi8ix2ckAZC74t
          source_id: s_hSdTPDWiNR5wL1nkYF2yMQ
          stance: supports
          locator: CBDB:202897
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202897）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4G7E2R1Mhq4VhuMMBFqBFc
        subject_person_id: p_2LvZRKXC4bvnUqu11G57yb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1508年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cSvADum8WGeUjC4MZDy6s7
          claim_id: c_4G7E2R1Mhq4VhuMMBFqBFc
          source_id: s_hSdTPDWiNR5wL1nkYF2yMQ
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
        id: c_qrU1fhgU338ZCGpKHA6iVm
        subject_person_id: p_2LvZRKXC4bvnUqu11G57yb
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
        - id: cs_VCjwnepDrtJovoyGSquNCA
          claim_id: c_qrU1fhgU338ZCGpKHA6iVm
          source_id: s_hSdTPDWiNR5wL1nkYF2yMQ
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
        id: c_K2nHjZDhdgi6A29tsRlF4N
        subject_person_id: p_rw3SZ4WX6NQUFQKsyEHVZ4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2LvZRKXC4bvnUqu11G57yb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5bznlL0p90sW9k05hN8yKY
          claim_id: c_K2nHjZDhdgi6A29tsRlF4N
          source_id: s_hSdTPDWiNR5wL1nkYF2yMQ
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第二十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rw3SZ4WX6NQUFQKsyEHVZ4
        status: active
        display_name: 王希德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_XZxZW_4KuDlmXjA2jYOb-l
        subject_person_id: p_2LvZRKXC4bvnUqu11G57yb
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_QMF99jgcERPAPKvwnHacMv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QY6MSZcnxApYNQ40LqyK6H
          claim_id: c_XZxZW_4KuDlmXjA2jYOb-l
          source_id: s_aN9QR9J6zJcAwkcRAkqxo1
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第二十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aN9QR9J6zJcAwkcRAkqxo1
            source_type: api_record
            title: 中国历代人物传记资料库：韓氏(王遵妻)（CBDB 296391）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296391&o=json
            external_identifier: CBDB:296391
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QMF99jgcERPAPKvwnHacMv
        status: active
        display_name: 韓氏
        merged_into_person_id: null
  ancestors:
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
          source: *a1
      object_person:
        id: p_6AWFkDwvMEx3gmWMnZMPwe
        status: active
        display_name: 王昺
        merged_into_person_id: null
    - claim:
        id: c_Rjkj9x11VC5938GguhT1jg
        subject_person_id: p_bfdWzUXjZU7XhphPpQjdV5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2LvZRKXC4bvnUqu11G57yb
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_81o3aQKSDbfi73tHcUKKZ1
          claim_id: c_Rjkj9x11VC5938GguhT1jg
          source_id: s_hSdTPDWiNR5wL1nkYF2yMQ
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第二十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bfdWzUXjZU7XhphPpQjdV5
        status: active
        display_name: 王商
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王遵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遵 | accepted |
| birth.date | 1508年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rw3SZ4WX6NQUFQKsyEHVZ4 | 王希德 | accepted |
| spouses | p_QMF99jgcERPAPKvwnHacMv | 韓氏 | accepted |
| ancestors | p_6AWFkDwvMEx3gmWMnZMPwe | 王昺 | accepted |
| ancestors | p_bfdWzUXjZU7XhphPpQjdV5 | 王商 | accepted |

## 外部来源

- [中国历代人物传记资料库：韓氏(王遵妻)（CBDB 296391）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296391&o=json)
- [中国历代人物传记资料库：王遵（CBDB 202897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202897&o=json)
