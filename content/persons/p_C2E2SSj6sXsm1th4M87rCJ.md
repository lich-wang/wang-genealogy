---
schema: wang-person/v1
id: p_C2E2SSj6sXsm1th4M87rCJ
status: active
merged_into: null
display_name: 王存禮
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1F8zMuH8jjgdESLVMWL4Wu
        subject_person_id: p_C2E2SSj6sXsm1th4M87rCJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王存禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FszRdGw7rNso7KP2MLGxh1
          claim_id: c_1F8zMuH8jjgdESLVMWL4Wu
          source_id: s_DeNL8vWuD2G72jS8kGaaJ8
          stance: supports
          locator: CBDB:200053
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200053）
          source: &a1
            id: s_DeNL8vWuD2G72jS8kGaaJ8
            source_type: api_record
            title: 中国历代人物传记资料库：王存禮（CBDB 200053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200053&o=json
            external_identifier: CBDB:200053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.586Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GJ9ktgPFKXmYeQGacJs89s
        subject_person_id: p_C2E2SSj6sXsm1th4M87rCJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1451年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kbkF1PNBhPPnfc8u3geVR4
          claim_id: c_GJ9ktgPFKXmYeQGacJs89s
          source_id: s_DeNL8vWuD2G72jS8kGaaJ8
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
        id: c_JtxQMYa7Sj4gcoDLxWqccS
        subject_person_id: p_C2E2SSj6sXsm1th4M87rCJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王存禮（生于1451年），明人物。明清進士進士，籍贯秦州衛，入仕進士。（中国历代人物传记资料库 CBDB 200053）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5dYZYFrx1o3GMSuipXYfeb
          claim_id: c_JtxQMYa7Sj4gcoDLxWqccS
          source_id: s_DeNL8vWuD2G72jS8kGaaJ8
          stance: supports
          locator: CBDB:200053
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0uchbk2oyMjm0bG8fIQiQu
        subject_person_id: p_V8KeHN8gfC9iMhtNZgxJtQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C2E2SSj6sXsm1th4M87rCJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qgI6gmTsVWLPbLzb7GdoE3
          claim_id: c_0uchbk2oyMjm0bG8fIQiQu
          source_id: s_DeNL8vWuD2G72jS8kGaaJ8
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百六十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_V8KeHN8gfC9iMhtNZgxJtQ
        status: active
        display_name: 王裕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_IdYbj-5GaNVMDXcZZo7HMN
        subject_person_id: p_C2E2SSj6sXsm1th4M87rCJ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_iunf6jkKktJbV8DFg59ymf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2o2cxVlfcYT_NECASMXudH
          claim_id: c_IdYbj-5GaNVMDXcZZo7HMN
          source_id: s_0oQdNYknkh6SW-jkmu-Okv
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百六十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_0oQdNYknkh6SW-jkmu-Okv
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王存禮妻)（CBDB 253211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253211&o=json
            external_identifier: CBDB:253211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iunf6jkKktJbV8DFg59ymf
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_E2f-FCUeXkEhHk99-v0qmq
        subject_person_id: p_DFBB1wf3KnWXdiqbE3dZP2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_C2E2SSj6sXsm1th4M87rCJ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i75_WmqsikCD0YnrWwWuZp
          claim_id: c_E2f-FCUeXkEhHk99-v0qmq
          source_id: s_DeNL8vWuD2G72jS8kGaaJ8
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百六十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DFBB1wf3KnWXdiqbE3dZP2
        status: active
        display_name: 王珍
        merged_into_person_id: null
    - claim:
        id: c_PFCiR2v2-f7H4KpICHw-vE
        subject_person_id: p_QNTmLcWuLk1CUo9Y8VD4Jf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_C2E2SSj6sXsm1th4M87rCJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bSWRqwt3hfKL9Tjy-9ksvR
          claim_id: c_PFCiR2v2-f7H4KpICHw-vE
          source_id: s_DeNL8vWuD2G72jS8kGaaJ8
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百六十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QNTmLcWuLk1CUo9Y8VD4Jf
        status: active
        display_name: 王融
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王存禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王存禮 | accepted |
| birth.date | 1451年 | accepted |
| bio.summary | 王存禮（生于1451年），明人物。明清進士進士，籍贯秦州衛，入仕進士。（中国历代人物传记资料库 CBDB 200053） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_V8KeHN8gfC9iMhtNZgxJtQ | 王裕 | accepted |
| spouses | p_iunf6jkKktJbV8DFg59ymf | 張氏 | accepted |
| ancestors | p_DFBB1wf3KnWXdiqbE3dZP2 | 王珍 | accepted |
| ancestors | p_QNTmLcWuLk1CUo9Y8VD4Jf | 王融 | accepted |

## 外部来源

- [中国历代人物传记资料库：王存禮（CBDB 200053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200053&o=json)
- [中国历代人物传记资料库：張氏(王存禮妻)（CBDB 253211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253211&o=json)
