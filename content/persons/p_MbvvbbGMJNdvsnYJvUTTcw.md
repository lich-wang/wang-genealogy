---
schema: wang-person/v1
id: p_MbvvbbGMJNdvsnYJvUTTcw
status: active
merged_into: null
display_name: 王定
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UfTEj4gcPJjhYohgaawL8v
        subject_person_id: p_MbvvbbGMJNdvsnYJvUTTcw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d1t76fAbpLXnF3zS1GGJJT
          claim_id: c_UfTEj4gcPJjhYohgaawL8v
          source_id: s_9hCe3bh81awyGPPjZbdRFw
          stance: supports
          locator: CBDB:139989
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139989）
          source: &a1
            id: s_9hCe3bh81awyGPPjZbdRFw
            source_type: api_record
            title: 中国历代人物传记资料库：王定（CBDB 139989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139989&o=json
            external_identifier: CBDB:139989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.462Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hPF13yRRT9TeVfyNima729
        subject_person_id: p_MbvvbbGMJNdvsnYJvUTTcw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 581年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sJWwT7PwNUu4LyiSBFqK9C
          claim_id: c_hPF13yRRT9TeVfyNima729
          source_id: s_9hCe3bh81awyGPPjZbdRFw
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
        id: c_6KNgu7jfBkgDa9akuxY69k
        subject_person_id: p_MbvvbbGMJNdvsnYJvUTTcw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 669年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3PuWhxVJUojP7BawfhQik9
          claim_id: c_6KNgu7jfBkgDa9akuxY69k
          source_id: s_9hCe3bh81awyGPPjZbdRFw
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
        id: c_KtomeH2gKaGiVbpULz91WF
        subject_person_id: p_MbvvbbGMJNdvsnYJvUTTcw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kAysynk6wgHP1qPZ7UnFJN
          claim_id: c_KtomeH2gKaGiVbpULz91WF
          source_id: s_9hCe3bh81awyGPPjZbdRFw
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
        id: c_mXx-z7y7UG-Iw3S475-p5b
        subject_person_id: p_seUbE6ck5GZ4hMvh3E2DNi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MbvvbbGMJNdvsnYJvUTTcw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LHYglwf-OFkoJviBLxQTp8
          claim_id: c_mXx-z7y7UG-Iw3S475-p5b
          source_id: s_9hCe3bh81awyGPPjZbdRFw
          stance: supports
          locator: 唐代墓誌匯編:二卷，Wansuidengfeng 4：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_seUbE6ck5GZ4hMvh3E2DNi
        status: active
        display_name: 王弘道
        merged_into_person_id: null
  children:
    - claim:
        id: c_bYF5_iVNKu2KpdMRSLFRV4
        subject_person_id: p_MbvvbbGMJNdvsnYJvUTTcw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bujBvWgZxPpvypX9KK6kk9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_usBTNsj1Puqi1bBGNiYyaD
          claim_id: c_bYF5_iVNKu2KpdMRSLFRV4
          source_id: s_9hCe3bh81awyGPPjZbdRFw
          stance: supports
          locator: 唐代墓誌匯編:二卷，Wansuidengfeng 4：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bujBvWgZxPpvypX9KK6kk9
        status: active
        display_name: 王璀
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王定

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王定 | accepted |
| birth.date | 581年 | accepted |
| death.date | 669年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_seUbE6ck5GZ4hMvh3E2DNi | 王弘道 | accepted |
| children | p_bujBvWgZxPpvypX9KK6kk9 | 王璀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王定（CBDB 139989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139989&o=json)
